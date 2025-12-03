"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  CheckCircle,
  Microscope,
  Layers,
  Users,
  UserCheck,
  Trophy,
  Sparkles,
  BadgeCheck,
  Building,
  Map,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs() {

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
    <section className="container py-20 md:py-24 px-6 md:px-12 select-none">
      {/* Título - Estilo unificado com Nossa Estrutura */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Por que escolher a <span className="text-greenSup">Suprema Analítica</span>?
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
          Excelência técnica, tecnologia de ponta e compromisso com resultados precisos para garantir a qualidade do seu produto.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Card 1: Experiência (2 colunas) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-primary-dark shadow-2xl min-h-[400px] flex flex-col justify-between p-8"
        >


          <div className="relative z-10">
            <div className="w-12 h-12 bg-greenSup/20 rounded-xl flex items-center justify-center mb-6 text-greenSup backdrop-blur-sm border border-greenSup/20">
              <Trophy size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Experiência e Credibilidade</h3>
            <p className="text-gray-200 max-w-md text-lg">
              Mais de 20 anos de história, construindo uma reputação sólida com know-how técnico e referência nacional.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-greenSup mb-1">
                <Star size={20} />
                <span className="font-bold text-2xl">
                  <CountUp end={20} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                </span>
              </div>
              <p className="text-sm text-gray-300 font-medium">Anos de Mercado</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-greenSup mb-1">
                <UserCheck size={20} />
                <span className="font-bold text-2xl">
                  <CountUp end={1000} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                </span>
              </div>
              <p className="text-sm text-gray-300 font-medium">Clientes Atendidos</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-greenSup mb-1">
                <Microscope size={20} />
                <span className="font-bold text-2xl">
                  <CountUp end={10000} duration={2.5} prefix="+" enableScrollSpy scrollSpyOnce />
                </span>
              </div>
              <p className="text-sm text-gray-300 font-medium">Análises Realizadas</p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Qualidade (1 coluna) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-primary-dark shadow-2xl min-h-[400px] p-8 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-greenSup/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="w-12 h-12 bg-greenSup/20 rounded-xl flex items-center justify-center mb-6 text-greenSup backdrop-blur-sm border border-greenSup/20">
            <BadgeCheck size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Compromisso com a Qualidade</h3>
          <p className="text-gray-300 mb-8">
            Política rigorosa de melhoria contínua e transparência em todos os processos.
          </p>

          <div className="mt-auto space-y-4">
            {[
              { icon: Users, text: "Satisfação Garantida" },
              { icon: CheckCircle, text: "Compromisso Real" },
              { icon: Sparkles, text: "Inovação Constante" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-greenSup">
                  <item.icon size={20} />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Serviços (1 coluna) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="md:col-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-primary-dark shadow-2xl min-h-[400px] p-8 flex flex-col"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10" />

          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 backdrop-blur-sm border border-blue-500/20">
            <Layers size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Metodologias Avançadas</h3>
          <p className="text-gray-300 mb-6">
            Do simples ao complexo, dominamos diversas técnicas analíticas.
          </p>

          <div className="space-y-3">
            {["Cromatografia", "Espectrofotometria", "Imunoabsorção", "HPLC", "ICP-OES"].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {tech}
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <Link href="#servicos" className="text-blue-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Card 4: Infraestrutura (2 colunas) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-primary-dark shadow-2xl min-h-[400px] flex flex-col md:flex-row items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/infra.png"
              alt="Infraestrutura"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent" />
          </div>

          <div className="relative z-10 p-8 w-full md:w-1/2">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 backdrop-blur-sm border border-purple-500/20">
              <Building size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Infraestrutura Moderna</h3>
            <p className="text-gray-300 mb-6">
              Matriz com 700m² e equipamentos de última geração. Investimento contínuo em tecnologia para garantir a melhor performance.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Map size={18} className="text-purple-400" />
                <span className="font-medium">Atendimento Nacional</span>
              </div>
            </div>
          </div>

          {/* Map Visualization (Abstract) */}
          <div className="relative z-10 w-full md:w-1/2 h-64 md:h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-xs opacity-80">
              <Map size={200} className="text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
              {/* Pontos pulsantes representando cobertura */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-greenSup rounded-full animate-ping" />
              <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75" />
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}