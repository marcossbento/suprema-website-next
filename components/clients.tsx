"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Client {
  id: number;
  alt: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, alt: "Biorigin", logo: "/clients/biorigin.png" },
  { id: 2, alt: "Bora Quimica", logo: "/clients/boraquimica.png" },
  { id: 3, alt: "Cargill", logo: "/clients/cargill.webp" },
  { id: 4, alt: "Ceagesp", logo: "/clients/ceagesp.png" },
  { id: 5, alt: "China in Box", logo: "/clients/china-in-box.png" },
  { id: 6, alt: "Denver", logo: "/clients/denver.png" },
  { id: 7, alt: "Dismed", logo: "/clients/dismed.png" },
  { id: 8, alt: "GL Foods", logo: "/clients/glfoods.png" },
  { id: 9, alt: "Predilecta", logo: "/clients/predilecta.png" },
  { id: 10, alt: "Prodesp", logo: "/clients/prodesp.png" },
  { id: 11, alt: "Raizen", logo: "/clients/raizen.png" },
  { id: 12, alt: "Sabesp", logo: "/clients/sabesp.png" },
  { id: 13, alt: "Sesi", logo: "/clients/sesi.png" },
  { id: 14, alt: "Sest Senat", logo: "/clients/sestsenat.webp" },
  { id: 15, alt: "Stella D'oro", logo: "/clients/stelladoro.png" },
  { id: 16, alt: "Unesp", logo: "/clients/unesp.png" },
  { id: 17, alt: "Usina Caete", logo: "/clients/usinacaete_w.png" },
  { id: 18, alt: "USP", logo: "/clients/usp.png" },
];

export default function ClientsCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  }, [
    Autoscroll({speed: 1, stopOnInteraction: false})
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <section ref={ref} className="container py-12 px-4 sm:px-8 mt-6 md:mt-10">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Nossos <span className="text-greenSup">Clientes</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira algumas das empresas e instituições que confiam em nosso trabalho para análises precisas e qualidade garantida.
          </p>
        </motion.div>

        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex items-center">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="flex-[0_0_50%] md:flex-[0_0_12%] px-6"
              >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    height={200}
                    className="object-cover transition-all duration-300"
                  />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-[100px] z-10 bg-gradient-to-r from-primary to-transparent"></div>
<div className="absolute right-[-1px] top-0 h-full w-[100px] z-10 bg-gradient-to-l from-primary to-transparent"></div>

        </div>
      </div>
    </section>
  );
}