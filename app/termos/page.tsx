"use client"

import React from "react"
import { motion } from "framer-motion"
import { Scale, CheckCircle, AlertTriangle, BookOpen, Globe, Gavel } from "lucide-react"
import { Header } from "@/components/header-sup"
import Footer from "@/components/footer-sup"

const terms = [
    {
        icon: CheckCircle,
        title: "1. Aceitação dos Termos",
        content: "Ao acessar e utilizar o site da Suprema Analítica, você concorda em cumprir estes Termos de Uso e todas as leis aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site."
    },
    {
        icon: Globe,
        title: "2. Serviços Oferecidos",
        content: "A Suprema Analítica fornece informações sobre serviços de análises laboratoriais (água, efluentes, alimentos, etc.). As informações contidas no site têm caráter informativo e não substituem consultoria técnica especializada para casos específicos."
    },
    {
        icon: BookOpen,
        title: "3. Uso do Site",
        content: "Você concorda em usar o site apenas para fins lícitos. É proibido usar o site para transmitir material ilícito, ofensivo ou que viole direitos de propriedade intelectual. Tentativas de violar a segurança do site resultarão em medidas legais."
    },
    {
        icon: Scale,
        title: "4. Propriedade Intelectual",
        content: "Todo o conteúdo deste site (textos, logotipos, imagens, design) é propriedade exclusiva da Suprema Analítica ou de seus licenciadores e é protegido pelas leis de direitos autorais e propriedade intelectual do Brasil."
    },
    {
        icon: AlertTriangle,
        title: "5. Limitação de Responsabilidade",
        content: "A Suprema Analítica envida esforços para manter as informações do site precisas e atualizadas, mas não garante que o material seja livre de erros. Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso deste site."
    },
    {
        icon: Gavel,
        title: "6. Foro e Legislação",
        content: "Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca da sede da empresa para dirimir quaisquer dúvidas ou litígios decorrentes destes termos."
    }
]

export default function TermosPage() {
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
                            Termos de <span className="text-greenSup">Uso</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Regras e diretrizes para a utilização dos nossos serviços digitais.
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
                            Bem-vindo ao site da <strong>Suprema Analítica</strong>. Leia atentamente as condições abaixo antes de utilizar nossos serviços e conteúdos.
                        </p>

                        <div className="space-y-12">
                            {terms.map((item, index) => (
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
                                            <item.icon className="w-6 h-6 text-greenSup" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-greenSup transition-colors duration-300">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed pl-16 border-l-2 border-white/5 group-hover:border-greenSup/30 transition-colors duration-300">
                                        {item.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                            <p>Ao continuar navegando, você concorda com estes termos.</p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
