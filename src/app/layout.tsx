import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "E-Comm",
  description: "Buy and Sell your product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
