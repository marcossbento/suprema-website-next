import type { Metadata } from "next";
import {  Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suprema Analítica | Página Inicial",
  description: "O laboratório de análises número 1 do Brasil.",	
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
