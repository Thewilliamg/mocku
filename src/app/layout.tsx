import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page" 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi mock UIS",
  description: "By William",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-900" >
      <body>
        <Home/>
      </body>
    </html>
  );
}
