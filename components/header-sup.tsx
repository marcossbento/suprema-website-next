import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export const Header = () => {

  const services: { title: string; href: string; description: string }[] = [
    {
      title: "ANÁLISE DE ÁGUA",
      href: "/servicos/analise-de-agua",
      description:
        "Análise de água potável, água de piscina, água de reuso, água de chuva, água de poço.",
    },
    {
      title: "ANÁLISE DE ALIMENTOS",
      href: "/servicos/analise-de-alimentos",
      description:
        "Análise de alimentos.",
    },
    {
      title: "ANÁLISE DE SOLO",
      href: "/servicos/analise-de-solo",
      description:
        "Análise de solo.",
    },
    {
      title: "EFLUENTES",
      href: "/servicos/efluentes",
      description: "Análise de efluentes.",
    },
    {
      title: "LIMPEZA E HIGIENIZAÇÃO DE RESERVATORIOS E CAMINHÕES",
      href: "/servicos/limpeza-e-higienizacao",
      description:
        "Limpeza e higienização de reservatórios e caminhões.",
    },
    {
      title: "COSMÉTICOS",
      href: "/servicos/cosmeticos",
      description:
        "Análise de cosméticos.",
    },
    {
      title: "AMOSTRAGEM",
      href: "/servicos/amostragem",
      description:
        "Amostragem.",
    },
    {
      title: "OUTROS SERVIÇOS",
      href: "/servicos/outros-servicos",
      description:
        "Outros serviços.",
    },
  ]

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "text-base block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"

  return (
    <header className="flex flex-row justify-around bg-white border-b-gray-700 border-solid border-b-2 py-3">
      <Image
        src="/LogoSupremaHorizontal.svg"
        width={201}
        height={25}
        alt="Logo Suprema Analítica"
        unoptimized={true}
      />
      <NavigationMenu className="text-primary ">
        <NavigationMenuList className="font-bold text-base">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-base">Sobre nós</NavigationMenuTrigger>
            <NavigationMenuContent className="text-primary">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className=""
                      href="/"
                    >
                      <Image src={"/SupremaIcon.png"} alt="" width={250} height={250}></Image>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Suprema Analítica
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Laboratório especializado em serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/nossa-historia" title="Nossa história">
                  Fundada em 2001, com o intuito de prestar serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade.
                </ListItem>
                <ListItem href="/docs/installation" title="Legislação">
                  Conheça as normas e legislações vigentes para análises.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-base">Serviços</NavigationMenuTrigger>
            <NavigationMenuContent className="text-primary">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((services) => (
                  <ListItem
                    key={services.title}
                    title={services.title}
                    href={services.href}
                  >
                    {services.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={""}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button className="px-8 py-2 rounded-full bg-blue-800 text-white font-bold transition duration-200 hover:bg-white hover:text-blue-800 border-2 border-transparent hover:border-blue-800">
        Área do Cliente
      </button>
    </header>
  );

};