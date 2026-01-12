import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Zap, Clock, Apple, Wheat, Package } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  acreditacaoImg?: string;
  acreditacaoAlt?: string;
  features?: { icon: React.ElementType, text: string }[];
  tags?: { icon: React.ElementType, text: string }[];
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/microscopio2.webp",
    alt: "Microscópio no laboratório",
    title: "Excelência em Análises Ambientais para sua Segurança e Conformidade.",
    subtitle: "Tecnologia de ponta e equipe qualificada para garantir a qualidade da sua água e alimentos.",
    features: [
      { icon: ShieldCheck, text: "Alta Precisão" },
      { icon: Zap, text: "Tecnologia de Ponta" },
      { icon: Clock, text: "Atendimento Ágil" }
    ]
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
    tags: [
      { icon: Apple, text: "In Natura" },
      { icon: Wheat, text: "Processados" },
      { icon: Package, text: "Ultraprocessados" }
    ]
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
    <div className="embla w-full h-[80vh] bg-black lg:h-screen overflow-hidden" ref={emblaRef}>
      <div className="embla__container h-full flex flex-row lg:h-screen">
        {slides.map((slide, index) => (
          <div key={slide.id} className="embla__slide flex flex-[0_0_100%] object-none relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              unoptimized
              className='object-cover'
            />
            {/* Gradient Overlay: Bottom-to-top (Mobile) / Left-to-right (Desktop) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b45] via-[#0e1b45]/50 to-transparent lg:bg-gradient-to-r lg:from-[#0e1b45] lg:via-[#0e1b45]/80 lg:to-transparent" />

            {/* Content Grid */}
            <div className="absolute inset-0 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center">

              {/* Left Column: Text & CTA */}
              <div className="flex flex-col justify-center items-start h-full text-left select-none text-white font-bold pt-20 lg:pt-0">
                <motion.h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 md:mb-6 max-w-3xl leading-tight`} // Adjusted for better responsiveness
                  initial={{ opacity: 0, x: -100 }}
                  animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h1>

                {/* Condicional: Se tiver imagem de acreditação */}
                {slide.acreditacaoImg ? (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-start"
                  >
                    {/* Imagem Mobile (Escondida no Desktop) - Reduzida e Ajustada */}
                    <div className="lg:hidden mb-4">
                      <a href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={slide.acreditacaoImg}
                          alt={slide.acreditacaoAlt || 'Credenciamento'}
                          width={100}
                          height={166}
                          className="object-contain w-28 sm:w-32 drop-shadow-lg"
                        />
                      </a>
                    </div>

                    <Link
                      href="/#contato"
                      className="w-fit inline-block px-5 py-2.5 md:px-8 md:py-4 bg-greenSup text-white rounded-full text-sm md:text-lg font-bold shadow-lg hover:bg-greenSup-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Entre em Contato
                    </Link>
                  </motion.div>
                ) : (
                  // Subtítulo (Se NÃO tiver imagem de acreditação)
                  <motion.div
                    className={`flex flex-col items-start`}
                    initial={{ opacity: 0, x: -100 }}
                    animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  >
                    <h2 className={`text-base sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-6 md:mb-8 font-medium`}>
                      {slide.subtitle}
                    </h2>

                    {/* Features Mobile (Slide 1) */}
                    {slide.features && (
                      <div className="flex flex-wrap justify-start gap-2 mb-6 lg:hidden">
                        {slide.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 rounded-full">
                            <div className="text-greenSup">
                              <feature.icon size={14} />
                            </div>
                            <span className="text-white text-xs font-bold">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags Mobile (Slide 3) */}
                    {slide.tags && (
                      <div className="flex flex-wrap justify-start gap-2 mb-6 lg:hidden">
                        {slide.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 rounded-full"
                          >
                            <div className="text-greenSup">
                              <tag.icon size={14} />
                            </div>
                            <span className="text-white text-xs font-bold">{tag.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href="/#contato"
                      className="w-fit inline-block px-5 py-2.5 md:px-8 md:py-4 bg-greenSup text-white rounded-full text-sm md:text-lg font-bold shadow-lg hover:bg-greenSup-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Entre em Contato
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Right Column: Visuals (Desktop Only) */}
              <div className="hidden lg:flex justify-center items-center h-full">
                {/* Acreditação */}
                {slide.acreditacaoImg && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    <a href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={slide.acreditacaoImg}
                        alt={slide.acreditacaoAlt || 'Credenciamento'}
                        width={300}
                        height={500}
                        className="drop-shadow-2xl object-contain max-h-[60vh] hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  </motion.div>
                )}

                {/* Features (Slide 1) */}
                {slide.features && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl max-w-sm"
                  >
                    <h3 className="text-white text-xl font-bold mb-6 border-b border-white/20 pb-2">Nossos Diferenciais</h3>
                    <div className="flex flex-col gap-6">
                      {slide.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 text-white">
                          <div className="p-3 bg-greenSup/20 rounded-full text-greenSup">
                            <feature.icon size={24} />
                          </div>
                          <span className="text-lg font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tags (Slide 3) */}
                {slide.tags && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    {slide.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                        className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-full shadow-xl hover:bg-white/20 transition-colors cursor-default"
                      >
                        <div className="text-greenSup">
                          <tag.icon size={28} />
                        </div>
                        <span className="text-white text-xl font-bold">{tag.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

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
