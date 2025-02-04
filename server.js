const express = require('express');
const next = require('next');
const fs = require('fs');
const axios = require('axios'); // Import Axios for making HTTP requests

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// Middleware for logging IP addresses
const logTraffic = (req, res, next) => {
  let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const logEntry = `Time: ${new Date().toISOString()}, IP: ${clientIp}, URL: ${req.originalUrl}\n`;

  fs.appendFileSync('traffic_logs.txt', logEntry);
  console.log(logEntry);
  next();
};

// Start Next.js server and handle requests
app.prepare().then(() => {
  const server = express();

  server.use(logTraffic);

  // Example API route
  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js server!' });
  });

  // Serve all Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://0.0.0.0:${PORT}`);

    // Start self-pinging every 14 minutes (14 * 60 * 1000 milliseconds)
    setInterval(() => {
      console.log('Pinging server to stay active...');
      axios.get(`http://localhost:${PORT}/api/hello`)
        .then(response => console.log(`Ping successful: ${response.data.message}`))
        .catch(error => console.error('Error pinging server:', error.message));
    }, 14 * 60 * 1000); // 14 minutes
  });
});
