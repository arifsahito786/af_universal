import "./globals.css";

export const metadata = {
  title: "AF Universal",
  description: "Premium Shopping Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
