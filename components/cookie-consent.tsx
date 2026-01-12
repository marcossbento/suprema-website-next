"use client"; // Necessário para manipulação de cookies

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export default function CookieBanner() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <CookieConsent
                disableStyles={true}
                location="none"
                buttonText="Aceitar"
                declineButtonText="Recusar"
                cookieName="cookie_consent"
                expires={365}
                overlay={false}
                containerClasses="fixed z-[9999] 
                    bottom-4 left-4 right-4 
                    md:bottom-8 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-5xl md:px-8
                    bg-[#0e1b45]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl 
                    p-5 md:py-4 md:px-6 
                    flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center justify-between 
                    transition-all duration-300 transform"
                contentClasses="text-left w-full md:w-auto flex-1 m-0"
                buttonWrapperClasses="flex gap-3 w-full md:w-auto justify-end shrink-0"
                buttonStyle={{
                    background: "#22c55e",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "12px 28px",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    flex: "1 1 auto",
                    minWidth: "100px" // Ensure buttons don't shrink too much
                }}
                declineButtonStyle={{
                    background: "transparent",
                    color: "#9ca3af",
                    fontSize: "14px",
                    fontWeight: "500",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    flex: "1 1 auto",
                    minWidth: "100px"
                }}
                enableDeclineButton
                onAccept={() => {
                    console.log("Cookies aceitos");
                    window.location.reload();
                }}
                onDecline={() => console.log("Cookies rejeitados")}
                flipButtons={true}
            >
                <div className="w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-2xl">🍪</span>
                        <p className="font-bold text-white text-lg tracking-wide">Cookies</p>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10 mx-2"></div>
                    <p className="text-sm text-gray-300 leading-relaxed md:text-base max-w-2xl">
                        Utilizamos cookies para personalizar sua experiência e analisar nosso tráfego.
                        <button
                            onClick={() => setShowDetails(true)}
                            className="inline ml-1 text-greenSup hover:text-green-400 font-medium transition-colors underline decoration-greenSup/30 underline-offset-4"
                        >
                            Saiba mais
                        </button>
                    </p>
                </div>
            </CookieConsent>

            {/* Dialog -Saiba Mais- */}
            <Dialog open={showDetails} onOpenChange={setShowDetails}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Política de Cookies</DialogTitle>
                        <DialogDescription>
                            <span className="mb-4 block">
                                Utilizamos cookies para: <br />
                                - Cookies essenciais (necessários para o funcionamento do site) <br />
                                - Cookies analíticos (para melhorar sua experiência)
                            </span>
                            <Button onClick={() => setShowDetails(false)}>Entendi</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}