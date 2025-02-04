const express = require('express');
const next = require('next');
const fs = require('fs');

// Set environment to development or production
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Middleware for logging IP addresses
const logTraffic = (req, res, next) => {
  let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const logEntry = `Time: ${new Date().toISOString()}, IP: ${clientIp}, URL: ${req.originalUrl}\n`;

  // Log all traffic
  fs.appendFileSync('traffic_logs.txt', logEntry);
  console.log(logEntry);
  next();
}

// Start Next.js server and handle requests
app.prepare().then(() => {
  const server = express();

  // Use the IP logging middleware
  server.use(logTraffic);

  // Define any custom API routes here
  server.get('/api/hello', (req, res) => {
    return res.json({ message: 'Hello from Node.js server!' });
  });

  // Serve all Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
