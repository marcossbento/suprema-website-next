"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  const midpoint = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, midpoint);
  const row2 = clients.slice(midpoint);

  const [emblaRef1] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  }, [
    Autoscroll({ speed: 1, stopOnInteraction: false })
  ]);

  const [emblaRef2] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  }, [
    Autoscroll({ speed: -1, stopOnInteraction: false })
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      }
    },
  };

  return (
    <section className="container py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nossos <span className="text-greenSup">Clientes</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-greenSup rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl text-lg leading-relaxed"
          >
            Confira algumas das empresas e instituições que confiam em nosso trabalho para análises precisas e qualidade garantida.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Row 1 - Left to Right (Standard) */}
          <div className="overflow-hidden relative" ref={emblaRef1}>
            <div className="flex items-center -ml-4">
              {row1.map((client) => (
                <div
                  key={client.id}
                  className="flex-[0_0_40%] md:flex-[0_0_20%] pl-4"
                >
                  <div className="relative w-full h-32 md:h-40 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left (Reverse) */}
          <div className="overflow-hidden relative" ref={emblaRef2}>
            <div className="flex items-center -ml-4">
              {row2.map((client) => (
                <div
                  key={client.id}
                  className="flex-[0_0_40%] md:flex-[0_0_20%] pl-4"
                >
                  <div className="relative w-full h-32 md:h-40 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}