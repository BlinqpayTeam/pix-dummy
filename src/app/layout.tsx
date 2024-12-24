import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import CustomToast from "@/components/ui/toast/CustomToast";

const geistSans = localFont({
  src: "./fonts/CreatoDisplay-Regular.otf",
  variable: "--font-geist-sans",
  // weight: "900",
  //subsets: ["latin"],
});

const geistMono = localFont({
  src: "./fonts/CreatoDisplay-Bold.otf",
  variable: "--font-geist-mono",
  // weight: "900",
  // subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blinqpay",
  description: "One platform, multiple solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {children}

        <CustomToast />
      </body>
    </html>
  );
}
