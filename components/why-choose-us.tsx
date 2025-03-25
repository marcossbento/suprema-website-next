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
  Map
} from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
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
      title: "Ampla Gama de Serviços",
      description: "Do simples ao complexo, oferecemos análises de água, alimentos, solo, efluentes, cosméticos e muito mais, aplicando metodologias avançadas como Cromatografia, Espectrofotometria e Espectrometria.",
      icon: Layers,
      badges: ["Água", "Alimentos", "Solo", "Efluentes", "Cosméticos"],
      image: '/services.png',
      alt: "Ampla Gama de Serviços"
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      title: "Infraestrutura Moderna",
      description: "Investimento contínuo em tecnologia e inovações, com equipamentos de última geração em nossa matriz de 700m², atendendo todo o território nacional.",
      icon: Building,
      hasMap: true,
      image: '/infra.png',
      alt: "Infraestrutura Moderna"
    }
  ];

  return (
    <section ref={ref} className="container py-12 px-4 sm:px-8 mt-6 md:mt-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a <span className="text-greenSup">Suprema Analítica</span>?
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 mb-12">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="flex flex-row bg-primary-dark shadow-lg hover:shadow-xl p-6 rounded-xl transition-all duration-300"

            >
              <div className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <benefit.icon size={28} className="text-greenSup" />
                </div>
                <div className='flex flex-row'>
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 mb-4">{benefit.description}</p>
                    {benefit.countUp && (
                      <div className="flex text-3xl text-white gap-4">
                        <div className='bg-primary rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-2'>
                          <div className="bg-primary-dark/50 p-3 rounded-full size-fit">
                            <Star size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={20}
                            duration={4}
                            className='text-white font-bold'
                            prefix='+'
                            suffix=' anos de experiência'
                          />
                        </div>
                        <div className='bg-primary rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-2'>
                          <div className="bg-primary-dark/50 p-3 rounded-full size-fit">
                            <UserCheck size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={1000}
                            duration={3}
                            className='text-white font-bold'
                            prefix='+'
                            suffix=' clientes satisfeitos'
                          />
                        </div>
                        <div className='bg-primary rounded-lg p-2 shadow-md flex flex-col items-center justify-center text-center gap-2'>
                          <div className="bg-primary-dark/50 p-3 rounded-full size-fit">
                            <Microscope size={24} className='text-greenSup' />
                          </div>
                          <CountUp
                            end={10000}
                            duration={4}
                            className='text-white font-bold'
                            prefix='+'
                            suffix=' análises realizadas'
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {benefit.badges && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {benefit.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {benefit.valueIcons && (
                    <div className="mt-4 flex justify-between">
                      {benefit.valueIcons.map((value, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <value.icon size={20} className="text-greenSup" />
                          </div>
                          <span className="text-sm font-medium mt-1">{value.title}</span>
                        </div>
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
                <Image
                  src={benefit.image}
                  alt={benefit.alt}
                  width={400}
                  height={400}
                  className="rounded-xl ml-6"
                  alt="Why Choose Us"
                />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}