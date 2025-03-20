import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { motion } from "framer-motion";


export const Header = () => {

  const [isShown, setIsShown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Verifica se está no topo da página
      setIsAtTop(currentScrollY < 10);

      // Mostra/Esconde header baseado na direção do scroll
      if (currentScrollY > lastScrollY) {
        // Scroll para baixo
        setIsShown(false);
      } else {
        // Scroll para cima
        setIsShown(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Adiciona throttle para melhor performance
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY]);

  const throttle = (func: () => void, limit: number) => {
    let inThrottle: boolean;
    return () => {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

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

  const aboutItems = [
    {
      title: "Nossa história",
      href: "/nossa-historia",
      description: "Fundada em 2001, com o intuito de prestar serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade."
    },
    {
      title: "Legislação",
      href: "/docs/installation",
      description: "Conheça as normas e legislações vigentes para análises."
    }
  ];

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
    <motion.header
      className={cn(
        "flex justify-between p-3 mt-2 mx-2 bg-white rounded-full fixed top-0 left-0 right-0 z-50 shadow-lg",
        isAtTop ? "mt-2" : "mt-0",
      )}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        y: isShown ? 0 : -100,
        opacity: isShown ? 1 : 0,
        marginTop: isAtTop ? '8px' : '0'
      }}
      exit={{ opacity: 0, y: isShown ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3
      }}
    >
      <Image
        src="/LogoSupremaHorizontal.svg"
        width={201}
        height={25}
        alt="Logo Suprema Analítica"
        unoptimized={true}
        className="w-[150px] h-auto md:w-[201px] md:h-auto"
      />
      <NavigationMenu className="hidden md:flex text-primary">
        <NavigationMenuList className="font-bold text-base">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-base">Sobre nós</NavigationMenuTrigger>
            <NavigationMenuContent className="text-primary">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className=""
                    >
                      <Image src={"/SupremaIcon.png"} alt="" width={250} height={250}></Image>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Suprema Analítica
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Laboratório especializado em serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade
                      </p>
                    </Link>
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
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contato" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botão Área do Cliente */}
      <div className="hidden md:flex">
        <button className="px-8 py-2 rounded-full bg-primary text-white font-bold transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary">
          Área do Cliente
        </button>
      </div>

      {/* Menu Mobile - Sheet/Sidebar */}
      <div className="flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary">
              <Menu size={32} />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] pt-10">
            <SheetTitle className="sr-only">
              Menu de navegação
            </SheetTitle>

            <div className="mb-6 flex items-center justify-start">
              <Image
                src="/SupremaIcon.png"
                width={40}
                height={40}
                alt="Suprema Analítica Logo"
                className="mr-2"
              />
              <span className="text-lg font-bold text-primary">Suprema Analítica</span>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {/* Sobre nós Accordion */}
              <AccordionItem value="sobre-nos">
                <AccordionTrigger className="py-3 text-base font-semibold text-primary hover:no-underline">
                  Sobre nós
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="py-2 text-sm hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Serviços Accordion */}
              <AccordionItem value="servicos">
                <AccordionTrigger className="py-3 text-base font-semibold text-primary hover:no-underline">
                  Serviços
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="py-2 text-sm hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Links diretos */}
            <div className="mt-3 border-t pt-4">
              <Link
                href="/contato"
                className="block py-3 text-base font-semibold text-primary"
              >
                Contato
              </Link>
            </div>

            {/* Botão Área do Cliente */}
            <div className="mt-6">
              <Button className="w-full py-6 rounded-full bg-primary text-white font-bold hover:bg-primary/90">
                Área do Cliente
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );

};