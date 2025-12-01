"use client"
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { services } from "@/lib/data";
import { Droplet, Apple, Waves, Sprout, Brush, Sparkles, TestTubes, Microscope, ArrowUpRight } from "lucide-react";

const iconMap = {
    Droplet, Apple, Sprout, Waves, Sparkles,
    Brush, TestTubes, Microscope, ArrowUpRight
};

interface Service {
    id: number;
    icon: keyof typeof iconMap;
    title: string;
    img: string;
    slug: string;
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 80,
            duration: 0.5
        }
    }
};

const ServiceCard = ({ service }: { service: Service }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const controls = useAnimation();
    const IconComponent = iconMap[service.icon];

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
            <Link href={service.slug} className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-96">
                    <img
                        src={service.img}
                        alt={`Imagem ilustrativa do serviço de ${service.title}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />

                    {/* Overlay gradiente*/}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Ícone de seta que aparece no hover (desktop) ou sempre (mobile) */}
                    <div className="absolute top-4 right-4 p-2 bg-primary/50 rounded-full translate-x-0 opacity-100 md:translate-x-12 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                        {IconComponent && <IconComponent className="h-8 w-8 mb-3 text-greenSup drop-shadow-lg" />}
                        <h3 className="text-2xl font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                            {service.title}
                        </h3>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function ServiceCards() {
    return (
        <section className="container py-12 px-4 sm:px-8 mt-6 md:mt-10">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Nossos <span className="text-greenSup">Serviços</span>
                </h2>
                <div className="w-20 h-1 bg-greenSup rounded-full mb-6" />
                <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
                    Soluções analíticas completas: da rotina à alta complexidade.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {(services as Service[]).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}