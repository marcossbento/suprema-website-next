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
  metadataBase: new URL('https://supremaanalitica.com.br'),
  title: {
    default: "Suprema Analítica | Análises Ambientais e Controle de Qualidade",
    template: "%s | Suprema Analítica"
  },
  description: "Laboratório de análises ambientais e controle de qualidade acreditado ISO/IEC 17025. Água, efluentes, alimentos, solo e muito mais em Araraquara e região.",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://supremaanalitica.com.br',
    siteName: 'Suprema Analítica',
    title: "Suprema Analítica | Análises Ambientais e Controle de Qualidade",
    description: "Laboratório de análises ambientais e controle de qualidade acreditado ISO/IEC 17025. Água, efluentes, alimentos, solo e muito mais.",
    images: [
      {
        url: '/og-image.jpg', // Make sure this image exists or change it
        width: 1200,
        height: 630,
        alt: 'Suprema Analítica Laboratório',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Suprema Analítica",
    description: "Laboratório de análises ambientais e controle de qualidade.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} font-sans`}>
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