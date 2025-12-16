import type { Metadata } from "next";
import { Geist_Mono , Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          {children}

      </ThemeProvider>
      </body>
    </html>
  );
}
