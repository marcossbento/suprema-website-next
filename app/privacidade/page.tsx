"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Server, UserCheck } from "lucide-react"
import { Header } from "@/components/header-sup"
import Footer from "@/components/footer-sup"

const sections = [
    {
        icon: Eye,
        title: "1. Coleta de Dados",
        content: "Coletamos informações essenciais para o funcionamento do site e prestação de nossos serviços. Isso inclui dados fornecidos voluntariamente em formulários de contato (nome, e-mail, telefone) e dados técnicos coletados automaticamente (cookies, endereço IP, tipo de navegador) para fins estatísticos e de segurança."
    },
    {
        icon: Server,
        title: "2. Uso das Informações",
        content: "Utilizamos seus dados para: responder a solicitações de orçamento e dúvidas; melhorar a experiência de navegação no site; enviar comunicações relevantes sobre nossos serviços (caso autorizado); e cumprir obrigações legais e regulatórias."
    },
    {
        icon: Lock,
        title: "3. Segurança dos Dados",
        content: "Adotamos medidas técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia e protocolos de segurança padrão de mercado."
    },
    {
        icon: FileText,
        title: "4. Compartilhamento",
        content: "A Suprema Analítica não vende, aluga ou comercializa seus dados pessoais. O compartilhamento ocorre apenas com prestadores de serviços essenciais (hospedagem, e-mail marketing) que seguem nossas diretrizes ou quando exigido por lei."
    },
    {
        icon: UserCheck,
        title: "5. Seus Direitos (LGPD)",
        content: "Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a: confirmar a existência de tratamento de dados; acessar seus dados; corrigir dados incompletos ou desatualizados; e solicitar a eliminação de dados (salvo obrigações legais de retenção)."
    },
    {
        icon: Shield,
        title: "6. Contato",
        content: "Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco através dos canais oficiais listados em nosso rodapé."
    }
]

export default function PrivacidadePage() {
    return (
        <div className="flex min-h-screen flex-col bg-primary text-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 text-center bg-gradient-to-b from-primary to-primary/95">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Política de <span className="text-greenSup">Privacidade</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transparência e compromisso com a proteção dos seus dados pessoais.
                        </p>
                    </motion.div>
                </section>

                {/* Content Section */}
                <section className="container mx-auto px-6 md:px-12 pb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                    >
                        <p className="text-gray-300 mb-12 leading-relaxed">
                            A <strong>Suprema Analítica</strong> valoriza a sua privacidade. Esta política descreve como tratamos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei n° 13.709/2018).
                        </p>

                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-greenSup/10 group-hover:bg-greenSup/20 transition-colors duration-300">
                                            <section.icon className="w-6 h-6 text-greenSup" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-greenSup transition-colors duration-300">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed pl-16 border-l-2 border-white/5 group-hover:border-greenSup/30 transition-colors duration-300">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                            <p>Última atualização: Janeiro de 2026.</p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
