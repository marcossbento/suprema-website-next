import {
    Card,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplet, Apple, CircleArrowDown, Sprout, Brush, Sparkles, TestTubes, Microscope } from "lucide-react";

const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 // Começa 30px abaixo da posição final
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15, // Amortecimento maior para animação mais suave em mobile
        duration: 0.5
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

export default function ServiceCards() {
    return (
        <div className="container py-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                    >
                        <Card
                            className="group border-none cursor-pointer bg-black h-96 mx-2 relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                        >
                            <Link href={service.slug}>
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-300 opacity-70 group-hover:opacity-90 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${service.img})` }}
                                >
                                </div>
                                <div className="relative z-10 h-full flex items-end justify-center">
                                    <CardFooter className="flex flex-col items-center text-center justify-center">
                                        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-white [text-shadow:_0_1px_5px_#000000]">
                                            {service.icon}
                                            <span className="">{service.title}</span>
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
                ))}
            </div>
        </div>
    )
}