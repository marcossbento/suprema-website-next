"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookie } from "cookies-next"; // Você precisará instalar: npm install cookies-next

export default function AnalyticsLoader() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        // Verifica se o cookie de consentimento existe e é verdadeiro
        // Adapte o nome do cookie conforme seu componente de banner (ex: 'cookie_consent')
        const consent = getCookie("cookie_consent");
        if (consent === "true") {
            setConsentGiven(true);
        }
    }, []);

    // Se não houve consentimento, não renderiza nada (bloqueia os scripts)
    if (!consentGiven) return null;

    return (
        <>
            {/* --- ÁREA PARA COLAR OS CÓDIGOS DA AGÊNCIA --- */}

            {/* Exemplo 1: Google Analytics (GTAG) */}
            {/* 
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=SEU-ID-AQUI"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'SEU-ID-AQUI');
        `}
      </Script> 
      */}

            {/* Exemplo 2: Meta Pixel (Facebook) */}
            {/* 
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU-PIXEL-ID');
          fbq('track', 'PageView');
        `}
      </Script>
      */}

            {/* --- FIM DA ÁREA DOS CÓDIGOS --- */}
        </>
    );
}
