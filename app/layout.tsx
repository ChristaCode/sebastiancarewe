import '../styles/globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Web Development Services',
  description: 'Custom React-based solutions tailored to your business needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        {/* Navigation Bar */}
        <header className="bg-blue-600 text-white shadow-md">
          <NavBar />
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full max-w-7xl mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 py-4 text-center">
          <p>
            © {new Date().getFullYear()} Christa Cooke. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
