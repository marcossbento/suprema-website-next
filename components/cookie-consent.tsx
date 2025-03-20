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
                location="bottom"
                buttonText="Aceitar todos"
                declineButtonText="Apenas essenciais"
                cookieName="cookie_consent"
                expires={365}
                overlay={false}
                style={{ 
                    background: "#0e1b45", 
                    borderTop: "1px solid #ffffff",    
                }}
                buttonStyle={{
                    background: "#5ab24c", 
                    fontWeight: "500",
                    borderRadius: "5px",
                }}
                declineButtonStyle={{
                    background: "none", 
                    fontWeight: "500",
                    borderRadius: "5px", 
                }}
                enableDeclineButton
                onAccept={() => console.log("Cookies aceitos")}
                onDecline={() => console.log("Cookies rejeitados")}
            >
                <div className="text-center md:text-left">
                    <p className="font-semibold">Utilizamos cookies 🍪</p>
                    <p className="text-sm text-gray-400">
                        Para melhorar sua experiência, usamos cookies essenciais e analíticos.
                        <button
                            onClick={() => setShowDetails(true)}
                            className="ml-1 underline hover:text-foreground"
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