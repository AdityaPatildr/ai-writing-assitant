import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/favicon.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bytterfly",
  description: "Your AI Writing Assitant",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
