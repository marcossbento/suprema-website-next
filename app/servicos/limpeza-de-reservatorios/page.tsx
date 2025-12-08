"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Building2,
    Truck,
    HeartPulse,
    Scale,
    ShieldCheck,
    Leaf,
    ArrowRight,
    CheckCircle2,
    Droplets
} from 'lucide-react';
import { Header } from '@/components/header-sup';
import Footer from '@/components/footer-sup';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LimpezaReservatoriosPage() {
    return (
        <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-greenSup selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-limpeza.png"
                        alt="Limpeza de Reservatórios"
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
                            <span className="text-sm font-medium text-blue-200">Segurança Sanitária</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl">
                            Limpeza e Higienização de <span className="text-greenSup">Reservatórios e Caminhões-Tanque</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                            Garantia de potabilidade da água, segurança sanitária e conformidade com a ANVISA para sua empresa, condomínio ou frota.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-left mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços Especializados</h2>
                        <div className="w-20 h-1.5 bg-greenSup rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group bg-primary-dark border border-white/10 p-10 rounded-3xl hover:border-greenSup/50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-greenSup mb-8 group-hover:bg-greenSup group-hover:text-white transition-colors">
                                <Building2 size={36} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Reservatórios e Caixas d'Água</h3>
                            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                Foco em remoção de biofilmes, incrustações e prevenção de corrosão estrutural.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group bg-primary-dark border border-white/10 p-10 rounded-3xl hover:border-greenSup/50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-greenSup mb-8 group-hover:bg-greenSup group-hover:text-white transition-colors">
                                <Truck size={36} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Caminhões-Tanque</h3>
                            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                Desinfecção rigorosa de tanques de transporte para evitar contaminação cruzada e garantir a pureza no trajeto.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section (Why choose us?) */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold mb-8"
                            >
                                Por que realizar a <span className="text-greenSup">Higienização?</span>
                            </motion.h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: HeartPulse,
                                        title: "Saúde Pública",
                                        desc: "Prevenção direta contra surtos de doenças de veiculação hídrica (Leptospirose, Hepatite A, Giardíase)."
                                    },
                                    {
                                        icon: Scale,
                                        title: "Conformidade Legal",
                                        desc: "Atendimento rigoroso às diretrizes da ANVISA e legislações estaduais/municipais. Evite multas e interdições."
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: "Preservação Patrimonial",
                                        desc: "A limpeza técnica previne a corrosão e deterioração precoce da infraestrutura dos reservatórios e tanques."
                                    },
                                    {
                                        icon: Leaf,
                                        title: "Responsabilidade Ambiental",
                                        desc: "Uso de métodos e produtos que minimizam o impacto no ecossistema (Sustentabilidade)."
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
                                            <div className="w-12 h-12 rounded-full bg-greenSup/20 flex items-center justify-center text-greenSup">
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-greenSup/20 to-blue-500/20 rounded-3xl blur-2xl" />
                            {/* Using a placeholder div or image here since we don't have a specific image for this section yet. 
                                 Reusing analise-agua.webp as a placeholder for visual structure if needed, or just a stylized block.
                                 I'll use a stylized block to keep it clean if no image is perfect. 
                                 Actually, let's use the same image structure as the reference but maybe a different placeholder if available, 
                                 or just the same one for now as per instructions to keep structure.
                             */}
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col justify-center">
                                <div className="w-20 h-20 bg-greenSup/20 rounded-full flex items-center justify-center text-greenSup mb-8 mx-auto shrink-0">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6 text-center">Qualidade Garantida</h3>
                                <p className="text-gray-300 text-lg text-center leading-relaxed">
                                    A <strong className="text-white">Suprema Analítica</strong> utiliza equipamentos de última geração e profissionais altamente qualificados para garantir que seu reservatório ou caminhão-tanque esteja livre de contaminantes, assegurando a saúde de todos.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-3xl"
                    >
                        <div className="bg-primary-dark rounded-[22px] p-12 md:p-20 text-left relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-greenSup/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-greenSup/10 border border-greenSup/20 mb-6">
                                    <ShieldCheck size={16} className="text-greenSup" />
                                    <span className="text-xs font-bold text-greenSup uppercase tracking-wider">Segurança Garantida</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                                    A <span className="text-greenSup">qualidade da água</span> que você consome depende da limpeza do seu reservatório.
                                </h2>

                                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                                    Não corra riscos. Garanta a potabilidade da água e a saúde de todos com nossa higienização especializada e certificada.
                                </p>

                                <div className="flex justify-start">
                                    <Link href="/#contato">
                                        <Button className={cn(
                                            "rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
                                            "h-auto min-h-[3.5rem] py-3 px-8 text-base md:h-16 md:px-10 md:text-xl whitespace-normal",
                                            "bg-greenSup text-white hover:bg-greenSup-dark hover:scale-105"
                                        )}>
                                            <span className="relative z-10 flex items-center gap-3">
                                                Solicitar Orçamento
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
