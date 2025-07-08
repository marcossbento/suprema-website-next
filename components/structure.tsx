// NossaEstrutura.tsx
import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, ChevronLeft, Medal } from 'lucide-react';
import { structureSlides } from '@/lib/data';

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
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});

    useEffect(() => {
        if (inView) { 
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container bg-primary-dark text-white mt-6 md:mt-10 py-12 px-4 sm:px-8 rounded-xl"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
                Conheça nossa <span className="text-greenSup">Estrutura</span>
            </h2>

            {/* Carrossel de Imagens */}
            <div className="relative mx-auto max-w-6xl">
                <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="embla__container flex">
                        {structureSlides.map((slide) => (
                            <div key={slide.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                                <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                                    {/* Tag <img> com otimizações manuais */}
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de Navegação Aprimorados */}
                <button
                    onClick={scrollPrev}
                    aria-label="Slide anterior"
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white/80 text-primary p-2 rounded-full z-10 shadow-md transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-greenSup"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={scrollNext}
                    aria-label="Próximo slide"
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white/80 text-primary p-2 rounded-full z-10 shadow-md transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-greenSup"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Seção de Informações Reestruturada */}
            <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                {/* Coluna Principal com Texto */}
                <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
                    <Medal size={48} className="text-greenSup" />
                    <p className="text-lg font-semibold leading-relaxed">
                        EMPRESA COMPROMETIDA COM A <span className='text-greenSup'>QUALIDADE</span>, PRESTANDO SERVIÇOS AMBIENTAIS COM PROFISSIONAIS CAPACITADOS.
                    </p>
                </div>

                {/* Coluna de Certificações */}
                <div className="md:col-span-2 grid grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src="/creditacao.webp"
                            alt="Selo de Acreditação ISO/IEC 17025"
                            loading="lazy"
                            decoding="async"
                            className="h-48 w-auto object-contain"
                        />
                        <p className="text-sm text-gray-300">
                            Acreditação <span className='font-bold'>ISO/IEC 17025</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                         <img
                            src="/reblas_w.png"
                            alt="Logotipo REBLAS ANVISA"
                            loading="lazy"
                            decoding="async"
                            className="h-28 w-auto object-contain"
                        />
                        <p className="text-sm text-gray-300">
                            Habilitado pela <span className='font-bold'>ANVISA (REBLAS)</span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};