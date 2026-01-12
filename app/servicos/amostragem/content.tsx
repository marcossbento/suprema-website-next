"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Thermometer,
    Truck,
    Users,
    MapPin,
    FileCheck,
    ArrowRight,
    CheckCircle2,
    FlaskConical
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AmostragemPage() {
    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-amostragem.png"
                        alt="Coleta de Amostras"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <FlaskConical size={20} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-200">Rigor Técnico</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl">
                            Coleta e Logística de <span className="text-greenSup">Amostras</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            A precisão da sua análise começa aqui. Garantimos a integridade da amostra e a cadeia de custódia desde a coleta até o laboratório.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Coleta com <span className="text-greenSup">Excelência</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-greenSup rounded-full mb-8" />
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                A <strong className="text-white">Suprema Analítica</strong> simplifica o processo para você. Não basta analisar com precisão; é preciso coletar com rigor técnico. Nossa equipe vai até você para garantir que a amostra chegue ao laboratório nas condições ideais de temperatura e preservação.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Cadeia de Custódia</h4>
                                        <p className="text-sm text-gray-400">Rastreabilidade total garantida.</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">
                                    "A qualidade do resultado analítico depende diretamente da qualidade da amostragem."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Differentials Grid Section */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais do Serviço</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Thermometer,
                                title: "Rigor Técnico e Preservação",
                                text: "Protocolos estritos de coleta para evitar contaminação cruzada e garantir a integridade da amostra (preservação correta e temperatura controlada)."
                            },
                            {
                                icon: Truck,
                                title: "Logística Integrada e Rápida",
                                text: "Gestão inteligente de rotas para assegurar que as amostras cheguem ao laboratório dentro do \"holding time\" (tempo de validade) exigido pelas normas."
                            },
                            {
                                icon: Users,
                                title: "Equipe Especializada",
                                text: "Técnicos treinados para atuar em diversos cenários, desde ambientes industriais complexos e espaços confinados até residências e comércios."
                            },
                            {
                                icon: MapPin,
                                title: "Abrangência de Atendimento",
                                text: "Coletas realizadas em indústrias, estações de tratamento (ETAs/ETEs), hospitais, escolas, condomínios e residências."
                            },
                            {
                                icon: FileCheck,
                                title: "Rastreabilidade",
                                text: "Garantia total da cadeia de custódia, documentando cada etapa do processo para sua segurança jurídica e auditorias."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group bg-primary-dark border border-white/10 p-8 rounded-3xl hover:border-greenSup/50 transition-colors duration-300"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-greenSup mb-6 group-hover:bg-greenSup group-hover:text-white transition-colors">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mb-20" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-3xl"
                    >
                        <div className="bg-primary-dark rounded-[22px] p-12 md:p-20 text-left relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                    <Truck size={16} className="text-blue-400" />
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Logística Eficiente</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                                    Deixe a logística e a técnica por nossa conta. <span className="text-greenSup">Agende sua coleta.</span>
                                </h2>

                                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                                    Garantimos a integridade da sua amostra com transporte adequado e rigor técnico, do ponto de coleta até o laboratório.
                                </p>

                                <div className="flex justify-start">
                                    <Link href="/#contato">
                                        <Button className={cn(
                                            "rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
                                            "h-auto min-h-[3.5rem] py-3 px-8 text-base md:h-16 md:px-10 md:text-xl whitespace-normal",
                                            "bg-greenSup text-white hover:bg-greenSup-dark hover:scale-105"
                                        )}>
                                            <span className="relative z-10 flex items-center gap-3">
                                                Agendar Coleta de Amostras
                                                <ArrowRight size={24} />
                                            </span>
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
