// NossaEstrutura.tsx
import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useAnimation } from 'framer-motion';
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

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <section className="relative py-20 md:py-24">
            {/* Background with Gradient and Texture - Rounded on Desktop */}
            <div className="absolute inset-0 md:inset-x-4 lg:inset-x-8 md:rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0e1b45] to-primary-dark z-0" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0" />
            </div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container relative z-10 px-6 md:px-12 lg:px-20 mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content & Trust */}
                    <div className="flex flex-col gap-8 text-white">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Conheça nossa <span className="text-greenSup">Estrutura</span>
                            </h2>
                            <div className="w-20 h-1 bg-greenSup rounded-full" />
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-full text-greenSup shrink-0">
                                <Medal size={32} />
                            </div>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                                Empresa comprometida com a <strong className="text-white font-bold">QUALIDADE</strong>, prestando serviços ambientais com profissionais altamente capacitados e tecnologia de ponta.
                            </p>
                        </div>

                        {/* Certifications Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Badge 1 - With Link */}
                            <a
                                href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="relative w-24 h-24 shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
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
                            </a>

                            {/* Badge 2 */}
                            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                                <div className="relative w-24 h-24 shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
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
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Carousel */}
                    <div className="relative">
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-greenSup/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

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
                            <button
                                onClick={scrollPrev}
                                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-greenSup text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-greenSup text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg"
                                aria-label="Próximo"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};