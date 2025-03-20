// NossaEstrutura.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, Medal } from 'lucide-react';

interface Slide {
    id: number;
    image: string;
    alt: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "/blog/alto-investimento.webp",
        alt: "Equipamento de análise"
    },
    {
        id: 2,
        image: "/blog/analise-rad.webp",
        alt: "Laboratório Suprema Analítica"
    },
    {
        id: 3,
        image: "/blog/marco-hist.webp",
        alt: "Área de trabalho"
    },
    {
        id: 4,
        image: "/blog/marco-hist2.webp",
        alt: "Equipamentos modernos"
    },
    {
        id: 5,
        image: "/blog/marco-hist3.webp",
        alt: "Laboratório organizado"
    },
    {
        id: 6,
        image: "/blog/marco-hist4.webp",
        alt: "Laboratório organizado"
    }
];

export const NossaEstrutura = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
    },
        [
            Autoplay({ delay: 4000, stopOnInteraction: false })
        ]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const controlsCarousel = useAnimation();
    const controlsInfo = useAnimation();

    const [refCarousel, inViewCarousel] = useInView({ triggerOnce: true, threshold: 0.4 });
    const [refInfo, inViewInfo] = useInView({ triggerOnce: true, threshold: 0.4 });

    useEffect(() => {
        if (inViewCarousel) controlsCarousel.start({ opacity: 1, y: 0 });
        if (inViewInfo) controlsInfo.start({ opacity: 1, y: 0 });
    }, [inViewCarousel, inViewInfo]);

    return (
        <section className="container flex flex-col justify-center items-center bg-blue-900 text-white mt-6 md:mt-10 py-12 px-4 sm:px-8 rounded-lg select-none">
            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Conheça nossa <span className="text-greenSup">Estrutura</span>
            </h2>

            {/* Carrossel de Imagens */}
            <motion.div
                ref={refCarousel}
                initial={{ opacity: 0, y: 50 }}
                animate={controlsCarousel}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full"
            >
                <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="embla__container flex">
                        {slides.map((slide) => (
                            <motion.div
                                key={slide.id}
                                className="embla__slide w-full flex-[0_0_100%] md:flex-[0_0_25%] mx-1 relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    width={1200}
                                    height={800}
                                    className="rounded-lg object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Botões de Navegação */}
                <button onClick={scrollPrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-blue-900 p-1 rounded-full z-10 shadow-md">
                    <ChevronLeft size={24}></ChevronLeft>
                </button>
                <button onClick={scrollNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-blue-900 p-1 rounded-full z-10 shadow-md">
                    <ChevronRight size={24}></ChevronRight>
                </button>
            </motion.div>

            {/* Informações Adicionais */}
            <motion.div
                ref={refInfo}
                initial={{ opacity: 0, y: -50 }}
                animate={controlsInfo}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="max-w-screen-xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center"
            >
                {/* Texto Sobre a Empresa */}
                <div className="md:w-1/3 text-center md:text-left">
                    <Medal size={48} className="mx-auto mb-2" />
                    <p className="text-lg md:text-xl font-semibold mb-2 text-center">
                        EMPRESA COMPROMETIDA COM A <span className='text-greenSup'>QUALIDADE</span>, PRESTANDO SERVIÇOS AMBIENTAIS COM PROFISSIONAIS CAPACITADOS PARA ATENDER NOSSOS CLIENTES.
                    </p>
                </div>

                {/* Certificação */}
                <div className="md:w-1/3 text-center">
                    <Image
                        src={"/creditacao.webp"}
                        alt="Certificado de acreditação"
                        className="mx-auto object-contain"
                        width={125}
                        height={100}
                    />
                    <p className="text-sm mt-2">
                        Certificado de acreditação
                    </p>
                </div>

                {/* Logo REBLAS */}
                <div className="md:w-1/3 text-center">
                    <Image
                        src="/reblas_w.png"
                        width={250}
                        height={200}
                        alt="Logotipo REBLAS"
                        className="mx-auto object-contain"
                    />
                    <p className="text-sm mt-2">
                        REBLAS Nº 85 Laboratório Habilitado ANVISA RDC 390/2020
                    </p>
                </div>
            </motion.div>
        </section>
    );
};