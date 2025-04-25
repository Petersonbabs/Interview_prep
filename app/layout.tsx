
import type { Metadata } from "next";
// import {  Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
// import NetworkProgress from "@/components/NetworkProgress";

// const monaSans = Mona_Sans({
//   variable: "--font-mona-sans",
//   subsets: ["latin"],
// });



export const metadata: Metadata = {
  title: "Interview Prep",
  description: "Ace your next interview with Ai interview prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`antialiased pattern`}
        suppressHydrationWarning
        style={{ fontFamily: "var(--font-mona-sans)" }}
      >
        {/* <NetworkProgress> */}
          <Toaster />
          {children}
        {/* </NetworkProgress> */}
      </body>
    </html>
  );
}
