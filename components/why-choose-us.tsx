"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import {
  Award,
  Star,
  CheckCircle,
  Droplet,
  Apple,
  Sprout,
  CircleArrowDown,
  Brush,
  Microscope,
  Layers,
  Users,
  UserCheck,
  Trophy,
  MapPin,
  Zap,
  Sparkles,
  BadgeCheck,
  Building,
  Map,
  CircleCheck
} from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      }
    },
  };

  // Variante para elementos dentro do card
  const elementVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        ease: "easeOut",
        duration: 1,
        delay: custom * 0.25, // Delay sequencial
      }
    }),
  };

  const benefits = [
    {
      id: 1,
      title: "Experiência e Credibilidade Reconhecida",
      description: "Mais de 20 anos de experiência desde a fundação em 2001, com profissionais de know-how técnico em processos padronizados, com referência nacional e internacional.",
      icon: Trophy,
      creditation: true,
      countUp: true,
      image: '/equipe.png',
      alt: "Experiência e Credibilidade Reconhecida"
    },
    {
      id: 2,
      title: "Ampla Gama de Serviços e métodologias",
      description: "Do simples ao complexo, oferecemos análises de diversos materiais e produtos utilizando metodologias avançadas.",
      icon: Layers,
      badges: ["Cromatografia", "Espectrofotometria", "Ensaio de Imunoabsorção Enzimática", "Cromatografia Líquida de Alta Eficiência", "Espectrometria de Emissão Atômica por Plasma Acoplado Indutivamente"],
      image: '/services.png',
      alt: "Ampla Gama de Serviços"
    },
    {
      id: 3,
      title: "Infraestrutura Moderna",
      description: "Investimento contínuo em tecnologia e inovações, com equipamentos de última geração em nossa matriz de 700m², atendendo todo o território nacional.",
      icon: Building,
      hasMap: true,
      image: '/infra.png',
      alt: "Infraestrutura Moderna"
    },
    {
      id: 4,
      title: "Compromisso com a Qualidade",
      description: "Nossa preocupação com a qualidade, segurança, competência e compromisso com clientes e parceiros guiam nossa política de melhoria contínua e transparência.",
      icon: BadgeCheck,
      valueIcons: [
        { title: "Satisfação", icon: Users },
        { title: "Compromisso", icon: CheckCircle },
        { title: "Inovação", icon: Sparkles }
      ],
      image: '/quality.png',
      alt: "Compromisso com a Qualidade"
    }
  ];

  return (
    <section className="container py-12 px-4 sm:px-8 mt-6 md:mt-10 select-none">
      {/* Título */}
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={elementVariants}
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
          >
            Por que escolher a <span className="text-greenSup">Suprema Analítica</span>?
          </motion.h2>
        </motion.div>

        {/* Map com os CARDS */}
        <div className="flex flex-col gap-8 mb-12">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: .4 }}
              className="flex flex-col xl:flex-row border-2 border-primary-light/70 bg-primary-dark shadow-lg p-6 rounded-xl"
            >
              <div className="flex flex-col lg:flex-row items-start gap-4">
                <div className='flex flex-col'>
                  <div>
                    <motion.h3
                      variants={elementVariants}
                      custom={1}
                      className="flex gap-2 text-2xl items-center md:text-4xl font-bold text-white mb-2"
                    >
                      <motion.div
                        variants={elementVariants}
                        custom={0}
                        className="bg-primary/10 p-3 rounded-full h-fit"
                      >
                        <benefit.icon size={24} className="text-greenSup" />
                      </motion.div>
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      variants={elementVariants}
                      custom={2}
                      className="text-gray-400 mb-4 text-sm"
                    >
                      {benefit.description}
                    </motion.p>
                    {/* CountUps primeiro card */}
                    {benefit.countUp && (
                      <motion.div
                        variants={elementVariants}
                        custom={3}
                        className="flex flex-col lg:flex-row text-3xl text-white gap-4 flex-grow"
                      >
                        <motion.div
                          variants={elementVariants}
                          custom={4}
                          className='lg:w-1/3 border-2 border-primary/50 rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-1'
                        >
                          <div className="bg-primary/50 p-3 rounded-full size-fit">
                            <Star size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={20}
                            duration={3}
                            className='text-greenSup font-bold text-lg lg:text-2xl'
                            prefix='+'
                            suffix=' anos de mercado'
                            enableScrollSpy={true}
                            scrollSpyDelay={300}
                          />
                        </motion.div>

                        <motion.div
                          className='lg:w-1/3 border-2 border-primary/50 rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-1'
                          variants={elementVariants}
                          custom={5}
                        >
                          <div className="bg-primary/50 p-3 rounded-full size-fit">
                            <UserCheck size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={1000}
                            duration={2.5}
                            className='text-greenSup font-bold text-lg lg:text-2xl'
                            prefix='+'
                            suffix=' clientes atendidos'
                            enableScrollSpy={true}
                          />
                        </motion.div>

                        <motion.div
                          className='lg:w-1/3 border-2 border-primary/50 rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-1'
                          variants={elementVariants}
                          custom={6}
                        >
                          <div className="bg-primary/50 p-3 rounded-full size-fit">
                            <Microscope size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={10000}
                            duration={2.8}
                            className='text-greenSup font-bold text-lg lg:text-2xl'
                            prefix='+'
                            suffix=' análises realizadas'
                            enableScrollSpy={true}
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  {benefit.badges && (
                    <div
                      className="flex flex-wrap gap-2">
                      {benefit.badges.map((badge, index) => (
                        <motion.span
                          variants={elementVariants}
                          custom={3}
                          key={index}
                          className="border-primary/50 border-2 text-greenSup px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {benefit.valueIcons && (
                    <div className="mt-4 flex justify-between">
                      {benefit.valueIcons.map((value, index) => (
                        <motion.div 
                          variants={elementVariants}
                          custom={3}
                          key={index} 
                          className="flex flex-col items-center">
                          <div className="bg-primary/50 p-3 rounded-full">
                            <value.icon size={20} className="text-greenSup" />
                          </div>
                          <span className="text-greenSup text-sm font-medium">{value.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {benefit.hasMap && (
                    <div className="mt-4 flex items-center justify-center bg-primary/5 p-4 rounded-lg">
                      <Map size={80} className="text-primary opacity-40" />
                      <div className="ml-4">
                        <h4 className="font-bold text-primary">Atendimento Nacional</h4>
                        <p className="text-sm text-gray-600">Serviços disponíveis em todo o território brasileiro</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}