import type { Metadata } from "next";
import { Geist_Mono , Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Punctua | Home",
    description: "Manage Attendee ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
