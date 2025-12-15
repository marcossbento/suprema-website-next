import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/cookie-consent";
import AnalyticsLoader from "@/components/analytics-loader"; // <--- Importe aqui

const poppins = Poppins({
  variable: "--font-poppins",
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
    <html lang="pt-BR" className={poppins.className}>
      <body>
        {/* O Loader gerencia os scripts baseado no cookie */}
        <AnalyticsLoader />

        {children}

        {/* O Banner permite o usuário aceitar/recusar */}
        <CookieBanner />
      </body>
    </html>
  );
}