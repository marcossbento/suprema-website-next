"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link as LinkIcon, ExternalLink } from "lucide-react"
import { Header } from "@/components/header-sup"
import Footer from "@/components/footer-sup"

const legislations = [
    {
        id: 1,
        title: "Portaria de Consolidação n° 5, de 28 de Setembro de 2017",
        link: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0005_03_10_2017.html",
    },
    {
        id: 2,
        title: "Decreto n° 8.468, de 08 de Setembro de 1976",
        link: "https://www.cetesb.sp.gov.br/Institucional/documentos/Dec8468.pdf",
    },
    {
        id: 3,
        title: "Resolução SS-65, de 02 de Agosto de 2016",
        link: "https://cvs.saude.sp.gov.br/zip/SS%2065%20-%202016.pdf",
    },
    {
        id: 4,
        title: "Resolução CONAMA N° 430/2011",
        link: "http://conama.mma.gov.br/",
    },
    {
        id: 5,
        title: "Resolução CONAMA N° 357/2005",
        link: "http://conama.mma.gov.br/",
    },
    {
        id: 6,
        title: "Resolução CONAMA N° 396/2008",
        link: "http://conama.mma.gov.br/",
    },
]

export default function LegislacaoPage() {
    return (
        <div className="flex min-h-screen flex-col bg-primary text-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 text-center bg-gradient-to-b from-primary to-primary/95">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Leitura necessária
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Abaixo os links com as informações das principais legislações no Brasil que regularizam as análises químicas.
                        </p>
                    </motion.div>
                </section>

                {/* Cards Grid */}
                <section className="container mx-auto px-6 md:px-12 pb-24 md:pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {legislations.map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative flex flex-col items-center justify-between p-8 md:p-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-greenSup/50 transition-all duration-300 min-h-[280px] text-center"
                            >
                                {/* Icon */}
                                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-greenSup/20 transition-colors duration-300">
                                    <LinkIcon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-greenSup transition-colors duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-greenSup mb-6 group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Footer Link Text */}
                                <div className="mt-auto flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-white/80 group-hover:text-greenSup transition-colors duration-300">
                                    <span>Clique Aqui</span>
                                    <ExternalLink className="w-4 h-4" />
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-greenSup/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.a>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
