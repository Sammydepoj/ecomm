import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "E-Comm",
  description: "Buy and Sell your product",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: "500"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
