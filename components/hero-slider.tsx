import React, { useState, useRef, useEffect } from 'react';
import  useEmblaCarousel  from 'embla-carousel-react';
import Image from 'next/image';

// Defina o tipo dos slides
interface Slide {
  title: string;
  description: string;
  image: string;
  ctaText?: string; // Botão de chamada à ação (opcional)
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel<EmblaCarouselType>(emblaOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Configurações do Embla
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    dragFree: true,
    autoplay: {
      enabled: true,
      pauseOnPointerDown: true,
      pauseOnGestureDown: true,
      delay: 5000, // Tempo entre transições
    },
  };

  // Atualiza o índice selecionado
  useEffect(() => {
    if (!emblaApi) return;
    const handleScroll = () => setSelectedIndex(emblaApi.select());
    emblaApi.on('select', handleScroll);
    return () => emblaApi.off('select', handleScroll);
  }, [emblaApi]);

  return (
    <div className="relative h-screen w-full">
      {/* Container do carousel */}
      <div className="embla h-full">
        <div className="embla__viewport relative h-full overflow-hidden">
          <div className="embla__container flex h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="embla__slide flex h-full w-full items-center justify-center p-8"
              >
                {/* Conteúdo do slide */}
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800} // Defina o tamanho conforme necessário
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <h2 className="text-4xl font-bold text-white mt-8">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-300 mt-4">
                    {slide.description}
                  </p>
                  {slide.ctaText && (
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600">
                      {slide.ctaText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="embla__indicators absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`embla__indicator ${
              selectedIndex === index ? 'embla__indicator--active' : ''
            }`}
            aria-current={selectedIndex === index}
            onClick={() => emblaApi?.select(index, true)}
          >
            <span className="sr-only">Slide {index + 1}</span>
            <span className="block w-3 h-3 rounded-full bg-white mx-2" />
          </button>
        ))}
      </div>
    </div>
  );
}