"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sprout,
    Layers,
    Tractor,
    HardHat,
    Leaf,
    FileText,
    CheckCircle2,
    ArrowRight,
    Scale,
    FileCheck,
    Microscope,
    FlaskConical,
    Grid2X2,
    Wheat
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AnaliseDeSoloPage() {
    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/heroSoil.png" // Fallback or placeholder if not exists, user to provide or I'll use generic
                        alt="Análise de Solo"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <Sprout size={20} className="text-greenSup" />
                            <span className="text-sm font-medium text-green-100">Base para o Sucesso</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Análise de <span className="text-greenSup">Solo</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            Maximize sua produtividade e garanta a sustentabilidade do seu negócio com análises de precisão certificada.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.6, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl font-bold mb-4"
                            >
                                O Alicerce da <span className="text-greenSup">Alta Produtividade</span>
                            </motion.h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="h-1.5 bg-greenSup rounded-full mb-6"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.6, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-6 text-gray-300 text-lg leading-relaxed"
                            >
                                <p>
                                    No cenário agrícola moderno, não há espaço para suposições. Compreender a saúde do solo é o alicerce para colheitas abundantes e sustentáveis.
                                </p>
                                <p>
                                    A <strong className="text-white">Suprema Analítica</strong> oferece a inteligência que você precisa. Nossas análises detalhadas permitem que você evite o desperdício de insumos, proteja os recursos naturais e, acima de tudo, aumente a rentabilidade da sua lavoura com base em dados concretos.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-greenSup/20 to-amber-500/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="relative w-full h-64 md:h-80 mb-6 rounded-2xl overflow-hidden bg-gray-800 group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/soil-intro.png"
                                        alt="Análise de Solo - Alta Produtividade"
                                        fill
                                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Certificação de Qualidade</h4>
                                        <p className="text-sm text-gray-400">Resultados auditados e confiáveis.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits/Sectors Grid */}
            <section className="py-20 px-4 md:px-6 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluções Especializadas</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Tractor,
                                title: "Agricultura",
                                text: "Produtividade Máxima: Nutrição balanceada e correção precisa para lavouras de alto desempenho e retorno financeiro."
                            },
                            {
                                icon: Leaf,
                                title: "Meio Ambiente",
                                text: "Sustentabilidade: Conformidade rigorosa com leis ambientais, garantindo a preservação do ecossistema e do seu patrimônio."
                            },
                            {
                                icon: HardHat,
                                title: "Construção Civil",
                                text: "Segurança Estrutural: Análise física detalhada para garantir fundações sólidas e seguras para seus empreendimentos."
                            },
                            {
                                icon: FileText,
                                title: "Consultoria",
                                text: "Dados Confiáveis: Laudos técnicos precisos que embasam projetos agronômicos e decisões estratégicas de manejo."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
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

            {/* Technical Parameters Section */}
            <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-primary-dark to-primary-dark/50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Parâmetros Cruciais</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full mb-6" />
                        <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
                            Nossa análise abrange todos os indicadores vitais para o diagnóstico completo do seu solo, garantindo precisão em cada detalhe.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Textura do Solo", desc: "Proporção de areia, silte e argila. Define a retenção de água e nutrientes.", icon: Grid2X2 },
                            { title: "pH do Solo", desc: "Indica acidez ou alcalinidade. Fundamental para a disponibilidade de nutrientes.", icon: FlaskConical },
                            { title: "Teor de Nutrientes", desc: "Macro e micronutrientes essenciais para o crescimento vigoroso das plantas.", icon: Wheat },
                            { title: "Matéria Orgânica", desc: "Indicador vital de fertilidade e saúde biológica do solo.", icon: Leaf }
                        ].map((param, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-greenSup/50 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <param.icon size={64} className="text-greenSup" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-greenSup/20 flex items-center justify-center text-greenSup mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <param.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-greenSup transition-colors">{param.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{param.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legislation Section */}
            <section className="py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-greenSup/10 rounded-full blur-3xl -mr-20 -mt-20" />

                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl font-bold mb-8"
                            >
                                Legislação e <span className="text-greenSup">Conformidade</span>
                            </motion.h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Lei nº 12.651/2012",
                                        subtitle: "Código Florestal Brasileiro",
                                        desc: "Diretrizes para conservação do solo e práticas agrícolas sustentáveis."
                                    },
                                    {
                                        title: "IN MAPA nº 27/2006",
                                        subtitle: "Ministério da Agricultura",
                                        desc: "Estabelece os métodos oficiais de análise de solo para garantia de qualidade."
                                    },
                                    {
                                        title: "ABNT NBR 16415/2015",
                                        subtitle: "Normas Técnicas",
                                        desc: "Critérios rigorosos para execução de análises, assegurando confiabilidade."
                                    }
                                ].map((law, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.6 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-1">
                                            <div className="w-8 h-8 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup">
                                                <Scale size={16} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{law.title}</h4>
                                            <p className="text-sm text-green-200 mb-1">{law.subtitle}</p>
                                            <p className="text-gray-400 text-sm">{law.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-3xl"
                        >
                            <div className="bg-primary-dark rounded-[22px] p-8 md:p-12 text-left">
                                <div className="w-20 h-20 bg-greenSup/20 rounded-full flex items-center justify-center text-greenSup mb-6">
                                    <FileCheck size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Compromisso Suprema</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    A Suprema Analítica é sua parceira na jornada por solos mais produtivos. Investimos em tecnologia e capacitação para entregar resultados que fazem a diferença no seu negócio.
                                </p>
                                <Link href="/#contato">
                                    <Button className={cn(
                                        "rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
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
