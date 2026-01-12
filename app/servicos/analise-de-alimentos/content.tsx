"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Wheat,
    PackageCheck,
    Factory,
    Microscope,
    ShieldCheck,
    Utensils,
    Award,
    CheckCircle2,
    ArrowRight,
    FileCheck,
    FlaskConical
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AnaliseDeAlimentosPage() {
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
                        src="/alimentosHero.webp"
                        alt="Análise de Alimentos"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark" />
                </div>

                <div className="container relative z-10 px-6 md:px-12 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <Utensils size={20} className="text-greenSup" />
                            <span className="text-sm font-medium text-green-100">Segurança Alimentar</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Análise de <span className="text-greenSup">Alimentos</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            A segurança alimentar é um pilar incontestável para a saúde da sociedade. Garantimos confiança e transparência em cada análise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
                                Líder em <span className="text-greenSup">Segurança Alimentar</span>
                            </motion.h2>
                            <motion.div variants={itemVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Em um cenário onde a qualidade dos alimentos é primordial, as análises desempenham um papel crucial, fornecendo confiança e transparência aos consumidores e às indústrias.
                                </p>
                                <div className="space-y-4 mt-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 min-w-[24px]">
                                            <ShieldCheck className="text-greenSup" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-xl mb-2">Preservação da Saúde Pública</h3>
                                            <p>
                                                As análises de alimentos são a linha de frente na detecção de contaminantes, patógenos e substâncias tóxicas. A Suprema Analítica atua como um guardião, garantindo que os alimentos estejam isentos de riscos.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 min-w-[24px]">
                                            <FileCheck className="text-greenSup" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-xl mb-2">Conformidade Rigorosa</h3>
                                            <p>
                                                Em um ambiente regulatório exigente, realizamos análises em estrita observância das legislações vigentes, assegurando que os alimentos atendam aos padrões estabelecidos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-greenSup/20 to-blue-500/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <Image
                                    src="/microscopio2.webp"
                                    alt="Análise Laboratorial de Alimentos"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-64 md:h-80 mb-6"
                                />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Qualidade Assegurada</h4>
                                        <p className="text-sm text-gray-400">Desde matérias-primas até produtos finais.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Variety Section */}
            <section className="py-20 bg-white/5">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Variedade de Alimentos Analisados</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                            A Suprema Analítica abrange uma ampla gama de alimentos, garantindo qualidade em todas as etapas da cadeia produtiva.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Matérias-Primas",
                                icon: Wheat,
                                description: "Análise rigorosa de farinhas, grãos e ingredientes base para garantir a qualidade desde a origem."
                            },
                            {
                                title: "Produtos Finais",
                                icon: PackageCheck,
                                description: "Verificação completa de produtos prontos para consumo, assegurando que cheguem seguros à mesa do consumidor."
                            },
                            {
                                title: "Itens Processados",
                                icon: Factory,
                                description: "Controle de qualidade em alimentos industrializados, monitorando cada etapa do processamento."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden bg-primary-dark border border-white/10 p-8 rounded-3xl hover:border-greenSup/50 transition-colors duration-300"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                    <item.icon size={120} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-greenSup mb-6 group-hover:bg-greenSup group-hover:text-white transition-colors duration-300">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-greenSup/10 rounded-full blur-3xl -mr-20 -mt-20" />

                <div className="container mx-auto relative z-10 px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Por que Escolher a <span className="text-greenSup">Suprema Analítica</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Microscope,
                                title: "Equipamentos de Ponta",
                                text: "Investimos em equipamentos de última geração, como espectrofotômetros e cromatógrafos, proporcionando análises precisas, abrangentes e resultados confiáveis."
                            },
                            {
                                icon: FlaskConical,
                                title: "Profissionais Competentes",
                                text: "Nossa equipe é formada por especialistas altamente qualificados, dedicados a assegurar que cada análise seja conduzida com a máxima precisão e competência técnica."
                            },
                            {
                                icon: Award,
                                title: "Compromisso com a Excelência",
                                text: "Não apenas atendemos às expectativas, mas as superamos. Fornecemos informações valiosas que permitem a tomada de decisões embasadas na indústria alimentícia."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-primary-dark border border-white/10 p-8 rounded-3xl hover:border-greenSup/50 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-greenSup mb-6 group-hover:bg-greenSup group-hover:text-white transition-colors">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-gradient-to-r from-greenSup/20 to-primary-dark border border-greenSup/20 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Segurança e Qualidade Garantidas</h3>
                            <p className="text-gray-300 max-w-2xl text-lg">
                                Ao escolher a Suprema Analítica, você está escolhendo mais do que um laboratório; está escolhendo a segurança para um mundo alimentar mais saudável.
                            </p>
                        </div>
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
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
