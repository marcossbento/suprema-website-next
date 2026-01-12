"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Leaf,
    Microscope,
    Layers,
    Droplets,
    FlaskConical,
    Search,
    FileSearch,
    CheckCircle2,
    ArrowRight,
    FileCheck,
    Atom
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OutrosServicosPage() {
    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-outros.webp"
                        alt="Tecnologia e Inovação"
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
                            <Atom size={20} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-200">Alta Tecnologia</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Soluções <span className="text-greenSup">Personalizadas</span> e Novas Tecnologias
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            Sua demanda específica atendida com equipamentos de última geração. Da pesquisa e desenvolvimento à análise de Cannabis Medicinal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Scope Extension Grid (Highlight) */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Extensão de Escopo <span className="text-greenSup">ISO/IEC 17025</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                        <p className="mt-4 text-gray-300 max-w-2xl">
                            Expandimos nossas capacidades analíticas para atender às demandas mais complexas e regulatórias do mercado.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Leaf,
                                title: "Cannabis Medicinal",
                                text: "Pioneirismo e autoridade: fomos o 2º laboratório do Brasil acreditado pelo INMETRO. Controle total de potência e impurezas, com rigor ANVISA e ISO 17025.",
                                highlight: "text-greenSup"
                            },
                            {
                                icon: Microscope,
                                title: "Tecnologia LC-MS-qTOF",
                                text: "Cromatografia Líquida acoplada à Espectrometria de Massas de Tempo de Voo. Varreduras de alta precisão para identificar compostos desconhecidos e traços vestigiais.",
                                highlight: "text-blue-400"
                            },
                            {
                                icon: Layers,
                                title: "Matrizes de Resíduos",
                                text: "Análises complexas em matrizes de resíduos sólidos e líquidos, garantindo conformidade ambiental avançada para sua indústria.",
                                highlight: "text-orange-400"
                            },
                            {
                                icon: Droplets,
                                title: "Amostragem Baixa Vazão",
                                text: "Técnicas específicas de coleta (Low-Flow) para monitoramento ambiental de alta precisão em águas subterrâneas.",
                                highlight: "text-blue-300"
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

            {/* R&D Section */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Pesquisa, Desenvolvimento e <span className="text-blue-400">Demandas Especiais</span>
                                </h2>
                                <p className="text-xl text-gray-300">
                                    Não encontrou o que procura? Nossa estrutura nos permite ir além.
                                </p>
                            </motion.div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: FlaskConical,
                                        title: "Desenvolvimento de Metodologias",
                                        desc: "Criação e validação de métodos analíticos customizados para a necessidade específica da sua indústria."
                                    },
                                    {
                                        icon: FileSearch,
                                        title: "Investigação de Falhas",
                                        desc: "Análise forense de materiais para descobrir a causa raiz de problemas em processos industriais complexos."
                                    },
                                    {
                                        icon: Search,
                                        title: "Identificação de Contaminantes",
                                        desc: "Graças ao LC-MS-qTOF, conseguimos identificar moléculas e contaminantes que métodos comuns não detectam."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex gap-6"
                                    >
                                        <div className="mt-1">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                                <item.icon size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-greenSup/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-primary-dark border border-white/10 rounded-3xl p-8 md:p-12 text-left">
                                <div className="w-20 h-20 bg-greenSup/20 rounded-full flex items-center justify-center text-greenSup mb-6">
                                    <FileCheck size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Desafio Analítico Complexo?</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Possui um desafio analítico complexo? Fale com nosso corpo técnico.
                                </p>
                                <Link href="/#contato">
                                    <Button className={cn(
                                        "rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
                                        "h-auto py-4 px-6 text-base md:text-lg w-full",
                                        "bg-greenSup text-white hover:bg-greenSup-dark hover:scale-105"
                                    )}>
                                        <span className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 text-center whitespace-normal">
                                            Consulte um Especialista
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
