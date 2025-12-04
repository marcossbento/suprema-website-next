'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: IoLogoWhatsapp, href: "https://api.whatsapp.com/send?phone=5516991466550&text=Ol%C3%A1.%20Estava%20navegando%20pelo%20site%20da%20Suprema%20Anal%C3%ADtica%20e%20gostaria%20de%20atendimento." },
        { icon: IoLogoInstagram, href: "https://www.instagram.com/suprema.analitica/" },
        { icon: IoLogoLinkedin, href: "https://br.linkedin.com/company/acqua-boom-saneamento-ambiental" },
    ];

    const quickLinks = [
        { title: "Quem Somos", href: "/quem-somos" },
        { title: "Legislação", href: "/legislacao" },
        { title: "Blog", href: "/blog" },
        { title: "Contato", href: "#contato" },
        { title: "Área do Cliente", href: "https://portal.mylimsweb.cloud/Login" },
    ];

    const services = [
        { title: "Análise de Água", href: "/servicos/analise-de-agua" },
        { title: "Análise de Alimentos", href: "/servicos/analise-de-alimentos" },
        { title: "Análise de Solo", href: "/servicos/analise-de-solo" },
        { title: "Efluentes", href: "/servicos/efluentes" },
        { title: "Limpeza de Reservatórios", href: "/servicos/limpeza-e-higienização" },
        { title: "Cosméticos", href: "/servicos/cosmeticos" },
    ];

    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/5">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-48">
                            <Image
                                src="/logoSupremaHorizontal.svg"
                                alt="Suprema Analítica"
                                width={180}
                                height={45}
                                unoptimized
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Compromisso com a qualidade e precisão em análises ambientais. Tecnologia de ponta e profissionais capacitados para atender sua empresa.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-greenSup hover:scale-110 transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-8 h-1 bg-greenSup rounded-full"></span>
                            Institucional
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-greenSup transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-greenSup transition-colors"></span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-8 h-1 bg-greenSup rounded-full"></span>
                            Serviços
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-greenSup transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-greenSup transition-colors"></span>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certification & Location */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                                <span className="w-8 h-1 bg-greenSup rounded-full"></span>
                                Acreditação
                            </h3>
                            <a
                                href="http://www.inmetro.gov.br/laboratorios/rble/docs/CRL1546.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                <Image
                                    src="/creditacao.webp"
                                    alt="Certificado de Acreditação"
                                    width={120}
                                    height={50}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                                <span className="w-8 h-1 bg-greenSup rounded-full"></span>
                                Localização
                            </h3>
                            <a
                                href="https://maps.app.goo.gl/vmSk3RHwH4WKenSe7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-3 text-gray-400 hover:text-greenSup transition-colors"
                            >
                                <MapPin className="shrink-0 mt-1 text-greenSup group-hover:animate-bounce" size={20} />
                                <span className="text-sm leading-relaxed">
                                    Av. Infante Dom Henrique, 494<br />
                                    Vila José Bonifácio<br />
                                    Araraquara - SP | CEP: 14802-060
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>
                        Copyright &copy; {currentYear} <span className="text-white font-medium">Suprema Analítica</span>. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
                        <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}