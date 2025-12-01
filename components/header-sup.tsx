"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion";
import { navAboutItems, navServicesItems } from "@/lib/data"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; 
import { Menu } from "lucide-react"

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
ListItem.displayName = "ListItem";

export const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-auto z-[999] h-px w-px overflow-hidden bg-white text-primary focus:left-4 focus:top-4 focus:h-auto focus:w-auto focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 ease-in-out",
            isScrolled
            ? 'h-14 bg-white/95 shadow-md backdrop-blur-sm px-4' // Header compactado
            : 'h-20 bg-white px-4'//Header no topo
        )}
        initial={{ y: -100 }}
        animate={{
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <Link href="/" aria-label="Página Inicial da Suprema Analítica">
          <Image
            src="/logoSupremaHorizontal.svg"
            width={201}
            height={25}
            alt="Logo Suprema Analítica"
            unoptimized={true}
            className="w-[150px] md:w-[201px] transition-transform duration-300 hover:scale-105 sm:p-4"
          />
        </Link>

        {/* Navegação para Desktop */}
        <NavigationMenu className="hidden md:flex text-primary">
          <NavigationMenuList className="font-bold text-base">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base bg-transparent hover:bg-primary/5">Sobre nós</NavigationMenuTrigger>
              <NavigationMenuContent className="text-primary">
                {/* ... (conteúdo do menu 'Sobre Nós' usando navAboutItems) */}
                 <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Image src={"/SupremaIcon.png"} alt="" width={60} height={60}></Image>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Suprema Analítica
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Laboratório especializado com o mais alto nível de comprometimento e qualidade.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {navAboutItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base bg-transparent hover:bg-primary/5">Serviços</NavigationMenuTrigger>
              <NavigationMenuContent className="text-primary">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navServicesItems.map((service) => (
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
              <Link href="#contato" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-primary/5")}>
                  Contato
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Botões de Ação */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="#contato">
            <Button className="rounded-full bg-greenSup text-white font-bold transition-all duration-300 hover:bg-greenSup-dark hover:scale-105 shadow-md">
              Solicitar Orçamento
            </Button>
          </Link>
          <Link href={"https://portal.mylimsweb.cloud/Login"} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full border-primary text-primary font-bold transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105">
              Área do Cliente
            </Button>
          </Link>  
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
                      {navAboutItems.map((item) => (
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
                <AccordionItem value="servicos" className="border-t">
                  <AccordionTrigger className="py-3 text-base font-semibold text-primary hover:no-underline">
                    Serviços
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      {navServicesItems.map((service) => (
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
              <div className="mt-3 pt-4">
                <Link
                  href="/contato"
                  className="block py-3 text-base font-semibold text-primary"
                >
                  Contato
                </Link>
              </div>

              {/* Botões de Ação */}
              <div className="mt-6 flex flex-col gap-4">
                <Link href="#contato">
                    <Button className="w-full py-6 rounded-full bg-greenSup text-white font-bold hover:bg-greenSup-dark shadow-md">
                    Solicitar Orçamento
                    </Button>
                </Link>
                <Link href="https://portal.mylimsweb.cloud/Login" target="_blank">
                    <Button variant="outline" className="w-full py-6 rounded-full border-primary text-primary font-bold hover:bg-primary hover:text-white">
                    Área do Cliente
                    </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );

};