import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AAG Associate",
  description: "Construction, infrastructure, and security surveillance solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang='en'>
          <body className='flex flex-col min-h-screen'>
            <Header/>
            <main className='grow'>{children}</main>
            <Footer/>
          </body>
        </html>
  );
}
