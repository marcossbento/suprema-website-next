"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Building2,
    Briefcase,
    Factory,
    Zap,
    CheckCircle2,
    ArrowRight,
    Droplets,
    Scale,
    FileCheck
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AnaliseDeAguaPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/heroWater.webp"
                        alt="Análise de Água"
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
                            <Droplets size={20} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-200">Recurso Vital</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Análise de <span className="text-greenSup">Água</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            Excelência e precisão para garantir a qualidade e segurança do recurso mais precioso para a vida e para o seu negócio.
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
                                    A Guardiã da <span className="text-greenSup">Excelência Hídrica</span>
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
                                    Em um cenário onde a água é um recurso vital, a qualidade e segurança desse líquido precioso são fundamentais para o bem-estar de comunidades, empresas e indústrias.
                                </p>
                                <p>
                                    A <strong className="text-white">Suprema Analítica</strong>, laboratório especializado em análises, emerge como parceira estratégica, oferecendo serviços que transcendem as expectativas e garantem conformidade total com as normas vigentes.
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
                                    src="/analise-agua.webp" // Assuming this image exists or using a placeholder if not
                                    alt="Laboratório de Análise de Água"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-64 md:h-80 mb-6"
                                />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Confiabilidade Garantida</h4>
                                        <p className="text-sm text-gray-400">Resultados precisos para tomadas de decisão seguras.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções para Todos os Setores</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Building2,
                                title: "Municípios",
                                text: "Garantia de abastecimento público seguro, assegurando que a água consumida pela população atenda aos padrões de saúde e qualidade de vida."
                            },
                            {
                                icon: Briefcase,
                                title: "Empresas",
                                text: "Conformidade com normativas ambientais em processos corporativos, evitando impactos negativos na produção e protegendo a reputação da marca."
                            },
                            {
                                icon: Factory,
                                title: "Indústrias",
                                text: "Medida proativa para prevenir contaminação e assegurar que efluentes atendam às diretrizes legais, minimizando o impacto ambiental."
                            },
                            {
                                icon: Zap,
                                title: "Usinas",
                                text: "Análises sistemáticas para garantir a eficiência operacional e a conformidade dos recursos hídricos utilizados no processo produtivo."
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
                                        title: "Lei nº 9.433/97",
                                        subtitle: "Política Nacional de Recursos Hídricos",
                                        desc: "Estabelece princípios para a gestão dos recursos hídricos, destacando a importância da qualidade da água."
                                    },
                                    {
                                        title: "Portaria MS/GM nº 888/2021",
                                        subtitle: "Diretrizes Nacionais para Saneamento",
                                        desc: "Define parâmetros de qualidade para consumo humano. A Suprema Analítica atende integralmente a essa portaria."
                                    },
                                    {
                                        title: "Norma ABNT NBR ISO/IEC 17025",
                                        subtitle: "Acreditação INMETRO",
                                        desc: "Garantia de qualidade e confiabilidade nos resultados de parâmetros como pH, turbidez e coliformes."
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
                                    A Suprema Analítica, acreditada pelo INMETRO, orgulha-se de superar as expectativas. Nossos especialistas, respaldados por tecnologia de ponta, garantem análises precisas em conformidade com as normativas.
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
