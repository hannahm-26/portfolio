import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});




export const metadata: Metadata = {
  title: "Vacation Countdown",
  description: "Countdown to Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} `}>
        {children}
      </body>
    </html>

  );
}
