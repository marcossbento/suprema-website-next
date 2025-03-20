import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  acreditacaoImg?: string;
  acreditacaoAlt?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/microscopio2.webp",
    alt: "Microscópio no laboratório",
    title: "O laboratório N°1 em análises.",
    subtitle: "Somos especializados na prestação de serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade",
  },
  {
    id: 2,
    image: "/heroWater.webp",
    alt: "Análise de água",
    title: "Atendimento completo da portaria Nº888",
    acreditacaoImg: "/creditacao.webp",
    acreditacaoAlt: "Certificado de acreditação"
  },
  {
    id: 3,
    image: "/alimentosHero.webp",
    alt: "Análise de alimentos",
    title: "Análise de Alimentos",
    subtitle: "In natura, processados e ultraprocessados",
  }
]

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true } as EmblaOptionsType, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
    Fade()
  ]);

  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (emblaApi) {
      const timer = setTimeout(() => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
        setIsLoaded(true);
      }, 100);

      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });

      return () => clearTimeout(timer);
    }
  }, [emblaApi]);

  return (
    <div className="embla w-full h-[80vh] bg-black md:h-screen" ref={emblaRef}>
      <div className="embla__container h-[80vh] flex flex-row md:h-screen">
        {slides.map((slide, index) => (
          <div key={slide.id} className="embla__slide flex flex-[0_0_100%] object-none relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              unoptimized
              className='object-cover opacity-60'
            />
            <div className="absolute inset-0 px-2 text-center flex flex-col items-center justify-center select-none text-white font-bold [text-shadow:_0_1px_5px_#000000]">
              <motion.h1
                className={`text-4xl md:text-7xl text-center mb-4`}
                initial={{ opacity: 0, y: -50 }}
                animate={currentIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
              {/* Condicional: h2 OU imagem Creditação */}
              {slide.acreditacaoImg ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={currentIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 flex flex-col items-center"
                >
                  <Image
                    src={slide.acreditacaoImg}
                    alt={slide.acreditacaoAlt || 'Credenciamento'}
                    width={125}
                    height={208}
                    className=" md:w-[200px]"
                  />
                  <Link
                      href="/contato"
                      className="w-fit inline-block mt-6 px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                    >
                      Entre em Contato
                    </Link>
                </motion.div>
              ) : (
                // Subtítulo
                <motion.h2
                  className={`flex flex-col items-center text-md text-white/70 md:text-2xl ${index === 1 ? 'text-2xl' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={currentIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {slide.subtitle}
                  <Link
                    href="/contato"
                    className="w-fit inline-block mt-6 px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                  >
                    Entre em Contato
                  </Link>
                </motion.h2>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${currentIndex === i ? 'bg-white' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
