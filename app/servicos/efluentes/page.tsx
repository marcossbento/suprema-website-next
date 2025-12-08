"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    Layers,
    TestTube2,
    Microscope,
    CheckCircle2,
    ArrowRight,
    Droplets,
    Scale,
    FileCheck,
    ShieldAlert
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AnaliseDeEfluentesPage() {
    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/effluent-hero.png"
                        alt="Análise de Efluentes"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/70 to-primary-dark" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <ShieldAlert size={20} className="text-greenSup" />
                            <span className="text-sm font-medium text-green-100">Gestão Responsável</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Análise de <span className="text-greenSup">Efluentes</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            O Laboratório Suprema Analítica garante a qualidade e conformidade dos seus resíduos líquidos com as normativas vigentes, protegendo sua empresa e o meio ambiente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                    Conformidade e <span className="text-greenSup">Segurança Ambiental</span>
                                </h2>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 100 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-1.5 bg-greenSup rounded-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-6 text-gray-300 text-lg leading-relaxed"
                            >
                                <p>
                                    A análise de água residual é vital para identificar substâncias nocivas e proteger ecossistemas aquáticos. O descarte inadequado pode causar danos irreversíveis ao meio ambiente.
                                </p>
                                <p>
                                    Para empresas, a análise regular é a garantia de cumprimento das legislações ambientais, evitando multas pesadas, sanções penais e danos irreparáveis à reputação da marca.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-greenSup/20 to-blue-500/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <Image
                                    src="/effluent-intro.png"
                                    alt="Análise Laboratorial de Efluentes"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-64 md:h-80 mb-6"
                                />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Segurança Jurídica</h4>
                                        <p className="text-sm text-gray-400">Laudos técnicos aceitos pelos órgãos fiscalizadores.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Parameters Grid (Bruto vs Tratado) */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Parâmetros de Análise</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                        <p className="mt-4 text-gray-300 max-w-2xl">
                            Monitoramos todo o ciclo do efluente, desde a entrada (Bruto) até o descarte (Tratado), garantindo eficiência no tratamento.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: AlertTriangle,
                                title: "Carga Orgânica (Bruto)",
                                text: "Análise de DBO (Demanda Bioquímica de Oxigênio) e DQO (Demanda Química de Oxigênio) para medir a carga poluente total.",
                                highlight: "text-orange-400"
                            },
                            {
                                icon: Layers,
                                title: "Sólidos (Bruto)",
                                text: "Identificação e quantificação de Sólidos Suspensos Totais, fundamentais para dimensionar o tratamento físico.",
                                highlight: "text-orange-400"
                            },
                            {
                                icon: TestTube2,
                                title: "Físico-Químico (Tratado)",
                                text: "Controle rigoroso de pH, Nitrato e Nitrito para garantir que o efluente tratado esteja quimicamente equilibrado.",
                                highlight: "text-greenSup"
                            },
                            {
                                icon: Microscope,
                                title: "Microbiológico (Tratado)",
                                text: "Monitoramento de Coliformes Totais e Termotolerantes para assegurar a qualidade sanitária do descarte final.",
                                highlight: "text-greenSup"
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
                                <div className={cn(
                                    "w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors",
                                    item.highlight
                                )}>
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

            {/* Legislation Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold mb-8"
                            >
                                Legislação e <span className="text-blue-400">Conformidade</span>
                            </motion.h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Lei nº 9.605/98",
                                        subtitle: "Lei de Crimes Ambientais",
                                        desc: "Estabelece sanções penais e administrativas. O despejo irregular é crime inafiançável."
                                    },
                                    {
                                        title: "Resolução CONAMA nº 430/2011",
                                        subtitle: "Padrões de Lançamento",
                                        desc: "Define os parâmetros exatos e limites para o lançamento de efluentes em corpos hídricos."
                                    },
                                    {
                                        title: "Lei nº 11.445/2007",
                                        subtitle: "Saneamento Básico",
                                        desc: "Diretrizes nacionais que obrigam empresas a evitar a contaminação dos recursos hídricos."
                                    },
                                    {
                                        title: "Norma ABNT NBR 10.004",
                                        subtitle: "Resíduos Sólidos",
                                        desc: "Classificação correta de resíduos sólidos e provenientes de estações de tratamento."
                                    }
                                ].map((law, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <Scale size={16} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{law.title}</h4>
                                            <p className="text-sm text-blue-300 mb-1">{law.subtitle}</p>
                                            <p className="text-gray-400 text-sm">{law.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-3xl"
                        >
                            <div className="bg-primary-dark rounded-[22px] p-8 md:p-12 text-left">
                                <div className="w-20 h-20 bg-greenSup/20 rounded-full flex items-center justify-center text-greenSup mb-6">
                                    <FileCheck size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Compromisso Suprema</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    A Suprema Analítica oferece suporte técnico completo para que sua empresa atenda a todas as exigências legais. Nossos laudos são precisos, confiáveis e entregues com agilidade.
                                </p>
                                <Link href="/#contato">
                                    <Button className={cn(
                                        "rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
                                        "h-14 px-8 text-lg",
                                        "bg-greenSup text-white hover:bg-greenSup-dark hover:scale-105"
                                    )}>
                                        <span className="relative z-10 flex items-center gap-2">
                                            Solicitar Orçamento
                                            <ArrowRight size={20} />
                                        </span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
