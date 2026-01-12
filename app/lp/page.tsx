"use client"

import React from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header-sup"
import Footer from "@/components/footer-sup"
import LPForm from "@/components/lp-form"
import { BadgeCheck, Droplet, Apple, Sparkles, Sprout, Home, Microscope, ChevronDown, Check } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
    {
        icon: Droplet,
        title: "Análise de Água",
        desc: "Potabilidade, efluentes e águas industriais com precisão garantida."
    },
    {
        icon: Apple,
        title: "Alimentos e Bebidas",
        desc: "Controle de qualidade microbiológico e físico-químico rigoroso."
    },
    {
        icon: Sparkles,
        title: "Cosméticos",
        desc: "Ensaios de eficácia e segurança para lançamentos e controle."
    },
    {
        icon: Sprout,
        title: "Análise de Solo",
        desc: "Avaliação ambiental e agronômica completa."
    },
    {
        icon: Home,
        title: "Higienização",
        desc: "Limpeza de reservatórios e caminhões com laudo técnico."
    },
    {
        icon: Microscope,
        title: "Outros Serviços",
        desc: "Ensaios customizados e consultoria regulatória."
    }
]

const differentials = [
    {
        title: "Líder em ETO",
        desc: "Laboratório n°1 da América Latina em Análises de Óxido de Etileno.",
        image: "/alimentosHero.webp"
    },
    {
        title: "Alta Tecnologia",
        desc: "Equipamentos de última geração para resultados precisos.",
        image: "/microscopio2.webp"
    },
    {
        title: "Eco-Friendly",
        desc: "Processos sustentáveis e compromisso com o meio ambiente.",
        image: "/effluent-hero.png"
    },
    {
        title: "Experts",
        desc: "+70 profissionais altamente qualificados e dedicados.",
        image: "/equipe.png"
    }
]

const faqs = [
    {
        q: "Quais tipos de análises a Suprema realiza?",
        a: "Realizamos uma vasta gama de análises, incluindo água, alimentos, cosméticos, solos, efluentes e ensaios especializados como a análise de ETO."
    },
    {
        q: "Vocês atendem apenas Araraquara?",
        a: "Não! Atendemos clientes em todo o Brasil e recebemos amostras de diversas regiões."
    },
    {
        q: "A Suprema Analítica é acreditada?",
        a: "Sim, somos acreditados pela norma NBR ISO/IEC 17025, garantindo padrão internacional de qualidade."
    },
    {
        q: "Qual o prazo de entrega dos resultados?",
        a: "O prazo varia conforme a complexidade da análise. oferecemos opções urgentes (1-3 dias) e regulares."
    },
    {
        q: "Como solicitar um orçamento?",
        a: "Basta preencher o formulário no topo desta página que nossa equipe comercial entrará em contato rapidamente."
    }
]

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <Header />

            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-primary">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 z-0">
                        {/* Fallback pattern or image */}
                        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                        <img src="/heroWater.webp" alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 text-white">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                                    O Laboratório <span className="text-greenSup">N°1</span> em Análises Laboratoriais
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                                    Referência na América Latina em análises de Óxido de Etileno e soluções completas para o seu negócio. Precisão, agilidade e confiança desde 2001.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                                        <BadgeCheck className="w-8 h-8 text-greenSup" />
                                        <div>
                                            <p className="font-bold text-sm">Acreditada</p>
                                            <p className="text-xs text-gray-300">ISO/IEC 17025</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                                        <Check className="w-8 h-8 text-greenSup" />
                                        <div>
                                            <p className="font-bold text-sm">+20 Anos</p>
                                            <p className="text-xs text-gray-300">de Experiência</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Component */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <LPForm />
                        </motion.div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Soluções Completas</h2>
                            <div className="h-1 w-20 bg-greenSup rounded-full mb-6" />
                            <p className="text-gray-700 text-lg">
                                Tecnologia de ponta para atender todas as necessidades analíticas da sua empresa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="group p-8 rounded-2xl border border-primary/20 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-greenSup">
                                    <div className="w-14 h-14 bg-greenSup/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-greenSup text-greenSup group-hover:text-white transition-all duration-300">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                                    <p className="text-gray-700 leading-relaxed font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DIFFERENTIALS SECTION */}
                <section className="py-20 bg-primary-dark relative overflow-hidden">
                    {/* Decorative blob */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-greenSup/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Por que escolher a <br />
                                    <span className="text-greenSup">Suprema Analítica?</span>
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Mais do que um laboratório, somos parceiros estratégicos para o controle de qualidade do seu negócio.
                                </p>

                                <div className="space-y-6">
                                    {differentials.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-greenSup/20 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-greenSup" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-sm">
                                        <img src="/creditacao.webp" alt="Acreditação" className="h-16 w-auto" />
                                        <div className="text-center sm:text-left">
                                            <p className="text-white font-bold mb-1">Acreditação NBR ISO/IEC 17025</p>
                                            <p className="text-sm text-gray-400">Reconhecimento internacional de competência técnica.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/analise-agua.webp" alt="Laboratório 1" className="rounded-2xl shadow-2xl w-full h-64 object-cover md:h-80 translate-y-8" />
                                    <img src="/heroWater.webp" alt="Laboratório 2" className="rounded-2xl shadow-2xl w-full h-64 object-cover md:h-80 -translate-y-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="max-w-4xl mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
                            <div className="h-1 w-20 bg-greenSup rounded-full mb-6" />
                            <p className="text-gray-700 text-lg">Tire suas dúvidas sobre nossos serviços e processos.</p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/20 rounded-xl px-6 bg-slate-50 hover:bg-white hover:border-greenSup hover:shadow-md transition-all">
                                    <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-greenSup hover:no-underline py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6 font-medium">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-gray-100">
                            <p className="text-gray-600 font-medium mb-4">Ainda tem dúvidas?</p>
                            <a
                                href="https://api.whatsapp.com/send?phone=5516991466550"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-greenSup font-bold hover:text-greenSup/80 transition-colors text-lg"
                            >
                                Fale com nossa equipe no WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
