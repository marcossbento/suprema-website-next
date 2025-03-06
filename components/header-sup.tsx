import { Menu, MenuItem, HoveredLink, ServiceItem } from "@/components/ui/navbar-menu";
import Image from 'next/image'
import { useState } from "react";

export const Header = () => {
    const [active, setActive] = useState<string | null>(null);

  return (
    <header className="flex flex-row justify-around">
            <Image
              src="/LogoSupremaHorizontal.svg"
              width={250}
              height={74}
              alt="Logo Suprema Analítica"
            />
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Quem Somos">
                <HoveredLink href="/">Conheça a Suprema Analítica</HoveredLink>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Serviços">
                <ServiceItem
                  title="Análise de Água"
                  description="A Suprema Analítica, laboratório especializado em análises, destaca-se pela excelência hídrica e serviços que superam expectativas."
                  href="/product-1"
                  src="/images/product-1.jpg"
                />
                <ServiceItem
                  title="Análise de Alimentos"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Análise de Solo"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Efluentes"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Limpeza e higienização de reservatórios e caminhões"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Cosméticos"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Amostragem"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
                <ServiceItem
                  title="Outros serviços"
                  description="Description of Product 2"
                  href="/product-2"
                  src="/images/product-2.jpg"
                />
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Contato">
                <HoveredLink href="mailto:vendas@supremaanalitica.com.br">vendas@supremaanalitica.com.br</HoveredLink>
                <HoveredLink href="mailto:vendas@supremaanalitica.com.br">(16)99234-5943</HoveredLink>
              </MenuItem>
            </Menu>
            <button className="px-8 py-2 rounded-full bg-blue-800 text-white font-bold transition duration-200 hover:bg-white hover:text-blue-800 border-2 border-transparent hover:border-blue-800">
              Área do Cliente
            </button>
          </header>
  );
};