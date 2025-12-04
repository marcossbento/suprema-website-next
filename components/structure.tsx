"use client"
// NossaEstrutura.tsx
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Medal, CheckCircle2 } from 'lucide-react';
import { structureSlides } from '@/lib/data';
import Image from 'next/image';

export const NossaEstrutura = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
    },
        [
            Autoplay({ delay: 4000, stopOnInteraction: false, playOnInit: true })
        ]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 20,
                delay: 0.4
            }
        }
    };

    return (
        <section className="relative py-20 md:py-24 overflow-hidden">
            {/* Background with Gradient and Texture - Rounded on Desktop */}
            <div className="absolute inset-0 md:inset-x-4 lg:inset-x-8 md:rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0e1b45] to-primary-dark z-0" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0" />
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="container relative z-10 px-6 md:px-12 lg:px-20 mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content & Trust */}
                    <div className="flex flex-col gap-8 text-white">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Conheça nossa <span className="text-greenSup">Estrutura</span>
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="h-1 bg-greenSup rounded-full"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-full text-greenSup shrink-0">
                                <Medal size={32} />
                            </div>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                                Empresa comprometida com a <strong className="text-white font-bold">QUALIDADE</strong>, prestando serviços ambientais com profissionais altamente capacitados e tecnologia de ponta.
                            </p>
                        </motion.div>

                        {/* Certifications Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Badge 1 - With Link */}
                            <motion.a
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl transition-colors group cursor-pointer"
                            >
                                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                                    <Image
                                        src="/creditacao.webp"
                                        alt="ISO/IEC 17025"
                                        width={96}
                                        height={96}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-greenSup font-bold uppercase tracking-wider mb-1">Acreditação</p>
                                    <p className="text-sm font-bold text-white">ISO/IEC 17025</p>
                                    <p className="text-xs text-gray-400">CRL 1546</p>
                                </div>
                            </motion.a>

                            {/* Badge 2 */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl transition-colors group"
                            >
                                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                                    <Image
                                        src="/logoReblas.webp"
                                        alt="REBLAS ANVISA"
                                        width={96}
                                        height={96}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-greenSup font-bold uppercase tracking-wider mb-1">Habilitação</p>
                                    <p className="text-sm font-bold text-white">ANVISA (REBLAS)</p>
                                    <p className="text-xs text-gray-400">REBLAS N° 85 Laboratório Habilitado ANVISA RDC 390/2020</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Visual Carousel */}
                    <motion.div variants={carouselVariants} className="relative">
                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-40 h-40 bg-greenSup/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                        />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900">
                            <div className="embla" ref={emblaRef}>
                                <div className="embla__container flex">
                                    {structureSlides.map((slide) => (
                                        <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0">
                                            <div className="relative h-[400px] w-full">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-0 left-0 p-6">
                                                    <p className="text-white font-medium text-lg flex items-center gap-2">
                                                        <CheckCircle2 size={20} className="text-greenSup" />
                                                        {slide.alt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 1)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={scrollPrev}
                                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-shadow shadow-lg"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 1)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={scrollNext}
                                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-shadow shadow-lg"
                                aria-label="Próximo"
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};