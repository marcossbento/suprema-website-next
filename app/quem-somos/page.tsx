"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Users, Award, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer-sup";
import { Header } from "@/components/header-sup";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function QuemSomosPage() {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <main className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
            <Header />

            {/* 1. Hero Section (Split Screen) */}
            <section className="relative w-full min-h-[600px] flex items-center bg-primary-dark overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <div className="flex flex-col md:flex-row items-center h-full gap-12 pt-32 pb-20">
                        {/* Text Content */}
                        <motion.div
                            ref={heroRef}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                            variants={staggerContainer}
                            className="w-full md:w-1/2 text-white z-10"
                        >
                            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2">
                                <span className="px-4 py-1.5 bg-greenSup/20 border border-greenSup text-greenSup-light rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                                    Sobre Nós
                                </span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Mais que um laboratório: <br />
                                <span className="text-greenSup-light">Referência em Precisão</span> e Excelência.
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                                Desde 2001, unimos tradição, tecnologia de ponta e responsabilidade ambiental para entregar resultados confiáveis em Araraquara e região.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-greenSup hover:bg-greenSup-dark text-white font-bold rounded-2xl px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Link href="#historia">
                                        Conheça Nossa História
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                        >
                            <Image
                                src="/equipe.png"
                                alt="Equipe Suprema Analítica"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            {/* Gradient Overlay for better text contrast if needed, mostly decorative here */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-greenSup/10 rounded-full blur-3xl" />
            </section>

            {/* 2. Faixa de Autoridade (Stats Bar) */}
            <section ref={statsRef} className="relative z-20 -mt-10 px-4">
                <div className="container mx-auto max-w-6xl bg-white py-12 shadow-xl rounded-3xl border border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                        {/* Stat 1 */}
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-baseline">
                                +<span className="tabular-nums">{statsInView && <CountUp end={20} duration={2.5} />}</span>
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Anos de História</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-baseline">
                                +<span className="tabular-nums">{statsInView && <CountUp end={70} duration={2.5} />}</span>
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Colaboradores</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-baseline">
                                <span className="tabular-nums">{statsInView && <CountUp end={700} duration={2.5} />}</span>m²
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Infraestrutura</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center p-4 flex flex-col items-center justify-center">
                            <div className="text-2xl md:text-3xl font-bold text-greenSup mb-2">
                                ISO/IEC 17025
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Acreditado</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Nossa História (Storytelling) */}
            <section id="historia" className="py-24 bg-neutral-50 overflow-hidden relative">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-64 bg-primary-dark/5" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row">

                            {/* Image Side (Full Height) */}
                            <motion.div
                                ref={historyRef}
                                className="w-full md:w-2/5 relative min-h-[400px] md:min-h-full"
                            >
                                <Image
                                    src="/microscopio2.webp"
                                    alt="Nossa História - Laboratório"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                                <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                    <p className="font-bold text-xl mb-1">Desde 2001</p>
                                    <p className="text-sm opacity-90">Construindo um legado de confiança e precisão.</p>
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-greenSup/10 text-greenSup text-sm font-semibold mb-6 w-fit">
                                    <Award className="w-4 h-4" />
                                    <span>Nossa Trajetória</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                                    Evolução constante marcada pela <span className="text-greenSup">qualidade</span>
                                </h2>

                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                                    <p>
                                        Fundada em 2001, a Suprema Analítica nasceu com o propósito de elevar o nível de qualidade em análises ambientais. O que começou como um sonho, hoje é uma realidade consolidada em todo o território nacional.
                                    </p>
                                    <p>
                                        Atendemos setores críticos como <strong>alimentos, saúde, química e meio ambiente</strong>, sempre com o compromisso de entregar resultados precisos.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                                    <div className="relative w-64 h-32 transition-all duration-300">
                                        <Image
                                            src="/creditacao.webp"
                                            alt="Acreditação ISO/IEC 17025"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <div className="pl-4 border-l border-gray-200">
                                        <p className="text-sm font-bold text-primary-dark">Garantia de Qualidade</p>
                                        <p className="text-xs text-gray-500">Laboratório Acreditado ISO/IEC 17025</p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Pilares e Valores (Cards Diferenciados) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                            Nossos Pilares
                        </h2>
                        <p className="text-gray-600 text-lg">
                            A base sólida que sustenta cada análise e cada relacionamento.
                        </p>
                    </div>

                    <motion.div
                        ref={pillarsRef}
                        variants={staggerContainer}
                        initial="hidden"
                        animate={pillarsInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Card 1: Satisfação */}
                        <motion.div variants={fadeInUp} className="group bg-neutral-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Satisfação do Cliente</h3>
                            <p className="text-gray-600">
                                Atendimento ágil, humanizado e cumprimento rigoroso de prazos e normas.
                            </p>
                        </motion.div>

                        {/* Card 2: Compromisso */}
                        <motion.div variants={fadeInUp} className="group bg-neutral-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-greenSup">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Compromisso Real</h3>
                            <p className="text-gray-600">
                                Segurança jurídica e tranquilidade para quem nos contrata.
                            </p>
                        </motion.div>

                        {/* Card 3: Inovação */}
                        <motion.div variants={fadeInUp} className="group bg-neutral-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-secondary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Inovação Constante</h3>
                            <p className="text-gray-600">
                                Novos métodos e eficiência analítica para superar expectativas.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. O Diferencial Técnico (Aligned Grid) */}
            <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/3" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">

                        <motion.div
                            ref={techRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                                <Award className="w-5 h-5 text-greenSup" />
                                <span className="text-sm font-medium tracking-wide">Excelência Técnica</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Tecnologia de Ponta e <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-greenSup-light to-blue-400">Capital Humano</span>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Nossa força reside na união entre uma equipe de mais de 70 colaboradores altamente preparados e um parque tecnológico de última geração.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-greenSup/20 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-greenSup-light" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-1">Equipe Multidisciplinar</h4>
                                        <p className="text-gray-400 text-sm">Químicos, biólogos e engenheiros atuando em sinergia.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-blue-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-1">Parceiro Estratégico</h4>
                                        <p className="text-gray-400 text-sm">Atuamos na gestão de negócios públicos e privados.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={techInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2"
                        >
                            {/* Clean 2x2 Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                    <Image src="/blog/alto-investimento.webp" alt="Tecnologia 1" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                    <Image src="/blog/analise-rad.webp" alt="Equipe" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                    <Image src="/blog/marco-hist.webp" alt="Microscópio" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                    <Image src="/blog/marco-hist2.webp" alt="Tecnologia 2" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 6. CTA Final (Convite) */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] p-8 md:p-16 text-left relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-greenSup rounded-full blur-[80px] opacity-30" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-30" />

                        <div className="relative z-10 max-w-3xl mr-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Estamos preparados para atender suas necessidades.
                            </h2>
                            <p className="text-blue-100 text-lg md:text-xl mb-10">
                                Inicie uma parceria de sucesso com a Suprema Analítica e garanta a qualidade que seu negócio merece.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-greenSup hover:bg-greenSup-dark text-white font-bold rounded-2xl px-6 py-4 h-auto whitespace-normal text-lg shadow-lg hover:shadow-greenSup/30 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <Link href="/#contato" className="flex items-center gap-2">
                                        Fale com nossos especialistas
                                        <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-primary font-bold rounded-2xl px-8 py-4 h-auto text-lg w-full sm:w-auto transition-colors duration-300"
                                >
                                    <Link href="/#servicos">
                                        Ver Nossos Serviços
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

