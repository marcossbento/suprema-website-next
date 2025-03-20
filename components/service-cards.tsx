import React from "react";
import {
    Card,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Droplet, Apple, CircleArrowDown, Sprout, Brush, Sparkles, TestTubes, Microscope } from "lucide-react";

interface Service {
    id: number;
    icon: React.ReactNode;
    title: string;
    img: string;
    slug: string;
  }

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 70,
        scale: 0.95,
        filter: "blur(5px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            damping: 20,      // Reduzido de 25 para 20 para maior oscilação
            stiffness: 100,   // Reduzido de 300 para 100 para movimento mais suave
            mass: 1.2,        // Adiciona massa para um movimento mais natural
            delay: 0.1,       // Pequeno atraso para melhor percepção
            duration: 1.0,    // Aumentado de 0.4 para 1.0 segundos
            ease: "easeOut"   // Curva de aceleração personalizada
        }
    }
};

const services = [
    {
        id: 1,
        icon: <Droplet size={24} />,
        title: "ANÁLISE DE ÁGUA",
        img: "services/analise-agua.webp",
        slug: "/servicos/analise-de-agua",
    },
    {
        id: 2,
        icon: <Apple size={24} />,
        title: "ANÁLISE DE ALIMENTOS",
        img: "services/analise-alimentos.webp",
        slug: "/servicos/analise-de-alimentos",
    },
    {
        id: 3,
        icon: <Sprout size={24} />,
        title: "ANÁLISE DE SOLO",
        img: "services/analise-solo.webp",
        slug: "/servicos/analise-de-solo",
    },
    {
        id: 4,
        icon: <CircleArrowDown size={24} />,
        title: "EFLUENTES",
        img: "services/efluentes.webp",
        slug: "/servicos/efluentes",
    },
    {
        id: 5,
        icon: <Sparkles size={24} />,
        title: "HIGIENIZAÇÃO DE RESERVATORIOS E CAMINHÕES",
        img: "services/limpeza-higienizacao.webp",
        slug: "/servicos/limpeza-e-higienizacao",
    },
    {
        id: 6,
        icon: <Brush size={24} />,
        title: "COSMÉTICOS",
        img: "services/cosmeticos.webp",
        slug: "/servicos/cosmeticos",
    },
    {
        id: 7,
        icon: <TestTubes size={24} />,
        title: "AMOSTRAGEM",
        img: "services/amostragem.webp",
        slug: "/servicos/amostragem",
    },
    {
        id: 8,
        icon: <Microscope size={24} />,
        title: "OUTROS SERVIÇOS",
        img: "services/outros-servicos.webp",
        slug: "/servicos/outros-servicos",
    },
];

const ServiceCard = ({ service }: { service: Service }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    });

    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
        >
            <Card
                className="group border-none cursor-pointer bg-black h-96 relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
            >
                <Link href={service.slug}>
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-300 opacity-70 group-hover:opacity-90 group-hover:scale-105"
                        style={{
                            backgroundImage: `url(${service.img})`,
                            objectFit: "cover",
                            willChange: "transform, opacity"
                        }}
                    >
                    </div>
                    <div className="relative z-10 h-full flex items-end justify-center">
                        <CardFooter className="flex flex-col items-center text-center justify-center">
                            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-white [text-shadow:_0_1px_5px_#000000]">
                                {service.icon}
                                <span>{service.title}</span>
                            </CardTitle>

                            <button
                                className="mt-4 px-5 py-2 bg-primary opacity-0 transform translate-y-10 
                                rounded-full text-white font-bold text-sm
                                transition-all duration-500 ease-in-out
                                group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                SAIBA MAIS
                            </button>
                        </CardFooter>
                    </div>
                </Link>
            </Card>
        </motion.div>
    );
};

export default function ServiceCards() {
    return (
        <section className="container py-12 px-4 sm:px-8 mt-6 md:mt-10">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">Nossos <span className="text-greenSup">Serviços</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}