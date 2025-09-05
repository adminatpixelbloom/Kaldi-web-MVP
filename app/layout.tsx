import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});
const instrument_Sans = Instrument_Sans({
  weight: ["400", "700"],
  variable: "--font-instrument-instrument_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavárna Kaldi",
  description: "Stránky kavárny Kaldi Fresh Coffee Bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${instrumentSerif.variable} ${instrument_Sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
