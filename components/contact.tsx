"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';

// Interfaces para estruturação de dados
interface ContactItem {
  text: string;
  prefix?: string;
  href?: string;
}

interface ContactCardData {
  id: number;
  icon: React.ElementType;
  title: string;
  items: ContactItem[];
  action: {
    text: string;
    href: string;
    icon: React.ElementType;
    openInNewTab?: boolean;
  };
}

// Componente reutilizável para os cards
const ContactCard = ({ data, index }: { data: ContactCardData, index: number }) => {
  const { icon: Icon, title, items, action } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: index * 0.1
      }}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)] h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-greenSup/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div className="w-16 h-16 bg-greenSup/10 rounded-2xl flex items-center justify-center mb-6 text-greenSup group-hover:scale-110 transition-transform duration-500 border border-greenSup/20">
          <Icon size={32} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

        <div className="space-y-4 text-gray-300 flex-grow font-medium w-full">
          {items.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className="flex items-center justify-center gap-2 hover:text-greenSup transition-colors p-2 rounded-lg hover:bg-white/5 w-full"
              >
                {item.prefix && <span className="font-medium text-gray-400">{item.prefix}:</span>} {item.text}
              </Link>
            ) : (
              <div key={index} className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg bg-white/5 w-full border border-white/5">
                {item.prefix && <span className="text-sm text-greenSup font-bold uppercase tracking-wider">{item.prefix}</span>}
                <span className="text-white">{item.text}</span>
              </div>
            )
          ))}
        </div>

        <Link
          href={action.href}
          target={action.openInNewTab ? "_blank" : undefined}
          className="mt-8 w-full py-4 px-6 bg-white/5 hover:bg-greenSup text-greenSup hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/10 hover:border-greenSup"
        >
          {action.text}
          <action.icon size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function ContactSection() {

  const titleVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.7
      }
    }
  };

  // Dados para cada card
  const contactCards: ContactCardData[] = [
    {
      id: 1,
      icon: Phone,
      title: "Telefones",
      items: [
        { text: "(16) 3114-2158", href: "tel:(16)3114-2158" },
        { text: "(16) 99146-6550", href: "tel:(16)99146-6550" }
      ],
      action: {
        text: "Whatsapp",
        href: "https://api.whatsapp.com/send?phone=5516991466550&text=Ol%C3%A1.%20Estava%20navegando%20pelo%20site%20da%20Suprema%20Anal%C3%ADtica%20e%20gostaria%20de%20atendimento.",
        icon: ExternalLink,
        openInNewTab: true
      }
    },
    {
      id: 2,
      icon: Mail,
      title: "E-mails",
      items: [
        { text: "vendas@supremaanalitica.com.br", href: "mailto:vendas@supremaanalitica.com.br" },
        { text: "sac@supremaanalitica.com.br", href: "mailto:sac@supremaanalitica.com.br" }
      ],
      action: {
        text: "Enviar E-mail",
        href: "mailto:vendas@supremaanalitica.com.br",
        icon: ExternalLink
      }
    },
    {
      id: 3,
      icon: Clock,
      title: "Horário de Funcionamento",
      items: [
        { prefix: "Segunda a Sexta", text: "" },
        { prefix: "", text: "07:40 às 11:30" },
        { prefix: "", text: "13:00 às 18:00" }
      ],
      action: {
        text: "Ver Localização",
        href: "https://maps.app.goo.gl/vmSk3RHwH4WKenSe7",
        icon: MapPin
      }
    }
  ];

  return (
    <section id="contato" className="container py-20 md:py-24 px-6 md:px-12 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-greenSup/10 rounded-full blur-3xl -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-screen" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-greenSup">Contato</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-greenSup rounded-full mb-6"
          />
          <motion.p variants={titleVariants} className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Fale com nossos especialistas e garanta a qualidade das suas análises hoje mesmo.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactCards.map((card, index: number) => (
            <ContactCard
              key={card.id}
              data={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}