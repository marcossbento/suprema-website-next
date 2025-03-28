'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { IoLogoWhatsapp } from "react-icons/io5";
import {
    Wrench,
    MapPin,
    Building
} from 'lucide-react';


export default function Footer() {

    const footerItems = [
        {
            id: 1,
            title: "CERTIFICADO DE ACREDITAÇÃO",
            content: (
                <div className='flex flex-col items-center'>
                    <a
                        href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/creditacao.webp"
                            alt="Certificado de Acreditação"
                            width={100}
                            height={40}
                            className="object-contain mb-4"
                        />
                    </a>
                    <p className="text-sm text-center ">
                        EMPRESA COMPROMETIDA COM A QUALIDADE, PRESTANDO SERVIÇOS AMBIENTAIS COM PROFISSIONAIS CAPACITADOS PARA ATENDER NOSSOS CLIENTES.
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            icon: Building,
            links: [
                { title: "Quem Somos", href: "/quem-somos" },
                { title: "Legislação", href: "/legislacao" },
                { title: "Contato", href: "#contato" },
                { title: "Blog", href: "/blog" },
                { title: "Área do Cliente", href: "https://portal.mylimsweb.cloud/Login" }
            ]
        },
        {
            id: 3,
            icon: Wrench,
            links: [
                { title: "Análise de Água", href: "/analise-de-agua" },
                { title: "Análise de Alimentos", href: "/analise-de-alimentos" },
                { title: "Análise de Solo", href: "/analise-de-solo" },
                { title: "Efluentes", href: "/efluentes" },
                { title: "Limpeza e Higienização de Reservatórios e caminhões", href: "/limpeza-e-higienização" },
                { title: "Cosméticos", href: "/cosmeticos" },
                { title: "Amostragem", href: "/amostragem" },
                { title: "Outros Serviços", href: "/outros-servicos" }
            ]
        },
        {
            id: 4,
            icon: MapPin,
            title: "Localização",
            content: (
                <div
                    className='flex flex-col items-center gap-4'
                >
                    <a
                        href="https://maps.app.goo.gl/vmSk3RHwH4WKenSe7"
                        target="_blank"
                        className='hover:text-greenSup transition duration-300'
                    >
                        Av. Infante Dom Henrique, 494 Vila José Bonifácio Araraquara - SP | CEP: 14802-060
                    </a>
                    <Image
                        src="/brasilFlag.png"
                        alt="Bandeira do Brasil"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <p>

                    </p>
                </div>
            ),
        }
    ];



    return (
        <footer className="text-sm text-center ">
            {/* FOOTER CONTACT */}
            <div className="footer-contact bg-white flex items-center justify-around p-5 md:p-10">
                <Link
                    href="/"
                    className='flex justify-center w-1/4'
                >
                    <Image
                        src="/SupremaIcon.png"
                        alt="Logo Suprema"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </Link>

                <Link
                    href="https://api.whatsapp.com/send?phone=5516991466550&text=Ol%C3%A1.%20Estava%20navegando%20pelo%20site%20da%20Suprema%20Anal%C3%ADtica%20e%20gostaria%20de%20atendimento."
                    target="_blank"
                    className="flex justify-center w-1/4 text-primary hover:text-primary-dark transition duration-300"
                >
                    <IoLogoWhatsapp size={34} />
                </Link>

                <Link
                    href="https://www.instagram.com/suprema.analitica/"
                    target="_blank"
                    className="flex justify-center w-1/4 text-primary hover:text-primary-dark transition duration-300"
                >
                    <IoLogoInstagram size={34} />
                </Link>

                <Link
                    href="https://br.linkedin.com/company/acqua-boom-saneamento-ambiental"
                    target="_blank"
                    className="flex justify-center w-1/4 text-primary hover:text-primary-dark transition duration-300"
                >
                    <IoLogoLinkedin size={34} />
                </Link>
            </div>

            {/* FOOTER INFO */}
            <div className="footer-info bg-primary p-5 md:p-10 flex flex-col md:flex-row md:items-start md:justify-around">
                {footerItems.map((item) => (
                    <div
                        key={item.id}
                        className={`md:w-1/4 text-white gap-2 my-2 ${item.id === 1 ? 'footer-item1' : 'footer-item2'
                            } flex flex-col items-center`}
                    >
                        {/* Ícone (se existir) */}
                        {item.icon && (
                            <item.icon
                                size={30}
                                className="text-greenSup"
                            />
                        )}

                        {/* Título */}
                        <h3 className="text-base font-bold">{item.title}</h3>

                        {/* Conteúdo ou links */}
                        {item.content ? (
                            item.content
                        ) : (
                            <nav className="flex flex-col gap-2">
                                {item.links?.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-white text-lg hover:text-greenSup transition"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </div>
                ))}
            </div>

            {/* COPYRIGHT */}
            <p className="bg-[#01377d] text-white py-3 text-center text-xs">
                Copyright &copy; {new Date().getFullYear()} Suprema Analítica. Todos os Direitos Reservados
            </p>
        </footer>
    );
}