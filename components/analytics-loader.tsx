"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookie } from "cookies-next";

export default function AnalyticsLoader() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Verifica o consentimento assim que o componente monta no cliente
    const consent = getCookie("cookie_consent"); // Certifique-se que seu Banner grava este nome exato
    if (consent === "true") {
      setConsentGiven(true);
    }
  }, []);

  // Se não houver consentimento, não carrega nenhum script de rastreamento
  if (!consentGiven) return null;

  return (
    <>
      {/* --- 1. GOOGLE TAG MANAGER (Recomendado Centralizar tudo aqui futuramente) --- */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KTL76NJ8');
        `}
      </Script>

      {/* --- 2. GOOGLE ADS (GTAG) --- */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16721688054"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16721688054');
        `}
      </Script>

      {/* --- 3. META PIXEL (FACEBOOK) --- */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '828982009092120');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* --- 4. LINKEDIN INSIGHT TAG --- */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push("7273089");
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
    </>
  );
}