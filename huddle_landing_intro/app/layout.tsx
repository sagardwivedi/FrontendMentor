import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";

import "./globals.css";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--pop",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--open_sans",
});

export const metadata: Metadata = {
  title: "Huddle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${popins.variable} ${open_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
