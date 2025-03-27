"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
const ContactCard = ({ data, variants }: { data: ContactCardData, variants: Variants }) => {
  const { icon: Icon, title, items, action } = data;

  return (
    <motion.div
      variants={variants}
      className="border-2 border-primary/50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 h-full"
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="bg-primary/50 p-4 rounded-full mb-4">
          <Icon size={32} className="text-greenSup" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="space-y-3 text-gray-200 flex-grow font-medium">
          {items.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className="flex items-center justify-center gap-2 hover:text-greenSup transition-colors"
              >
                {item.prefix && <span className="font-medium">{item.prefix}:</span>} {item.text}
              </Link>
            ) : (
              <p key={index} className="flex items-center justify-center gap-2">
                {item.prefix && <span className="font-medium">{item.prefix}:</span>} {item.text}
              </p>
            )
          ))}
        </div>
        <Link
          href={action.href}
          target={action.openInNewTab ? "_blank" : undefined}
          className="mt-6 inline-flex items-center text-greenSup-light/90 hover:text-green-600 transition-colors duration-300"
        >
          {action.text} <action.icon size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function ContactSection() {
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
        delayChildren: 0.1,
      },
    },
  };

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

  const cardVariants = {
    hidden: {
      y: 0,
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: {
      y: 30,
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
    <section ref={ref} className="container py-12 px-4 sm:px-8 mt-6 md:mt-10 bg-primary-dark rounded-lg">
      <div className="container mx-auto">
        <motion.div
        key={`first-div-${2}`}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h1 variants={titleVariants} className="text-5xl font-bold text-white mb-8 text-center">Entre em <span className="text-greenSup">Contato</span></motion.h1>
          <motion.p variants={titleVariants} className="text-gray-300 max-w-2xl mx-auto">
            Estamos à disposição para ajudar com suas dúvidas, solicitações de análises ou agendar visitas técnicas.
          </motion.p>
        </motion.div>

        <motion.div
          key={`first-div-${1}`}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4"
        >
            {contactCards.map((card, index:number) => (
              <ContactCard
                key={card.id}
                data={card}
                variants={{
                  ...cardVariants,
                  visible: {
                    ...cardVariants.visible,
                    transition: {
                      ...cardVariants.visible.transition,
                    }
                  }
                }}
              />
            ))}
        </motion.div>
      </div>
    </section >
  );
}