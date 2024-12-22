import type { Metadata } from "next";
import { ohnoSoftie } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Ol Chiki - Embrace the Beauty of Santali Script",
  description: "Learn Ol Chiki is a platform designed to make learning the Santali script fun, accessible, and engaging for learners of all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ohnoSoftie.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
