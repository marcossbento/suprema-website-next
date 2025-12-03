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
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navAboutItems, navServicesItems } from "@/lib/data"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Menu, ChevronRight } from "lucide-react"

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 10 && latest > previous) {
      setIsScrolled(true);
    } else if (latest <= 10) {
      setIsScrolled(false);
    }
  });

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
          "fixed top-0 left-0 right-0 z-50 flex flex-col justify-center transition-all duration-500 ease-in-out",
          isScrolled
            ? 'h-14 md:h-16 bg-white/70 shadow-sm backdrop-blur-xl' // Compact & Premium Blur
            : 'h-20 md:h-24 bg-white' // Spacious Top
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
        <div className="w-full h-full flex justify-between items-center px-4 md:px-6 relative z-20">
          <Link href="/" aria-label="Página Inicial da Suprema Analítica" className="flex items-center">
            <Image
              src="/logoSupremaHorizontal.svg"
              width={201}
              height={25}
              alt="Logo Suprema Analítica"
              unoptimized={true}
              className={cn(
                "h-auto transition-all duration-500 ease-in-out",
                isScrolled ? "w-[130px] md:w-[160px]" : "w-[160px] md:w-[200px]" // Increased mobile logo size
              )}
            />
          </Link>

          {/* Navegação para Desktop */}
          <NavigationMenu className="hidden md:flex text-primary">
            <NavigationMenuList className="font-bold text-base gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold text-base bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5 transition-colors">Sobre nós</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="font-bold text-base bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5 transition-colors">Serviços</NavigationMenuTrigger>
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
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-primary/5 font-bold text-base transition-colors")}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Botões de Ação */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#contato">
              <Button className={cn(
                "rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group",
                isScrolled ? "h-9 px-4 text-sm" : "h-11 px-6 text-base",
                "bg-greenSup text-white hover:bg-greenSup-dark hover:scale-105"
              )}>
                <span className="relative z-10">Solicitar Orçamento</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
              </Button>
            </Link>
            <Link href={"https://portal.mylimsweb.cloud/Login"} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className={cn(
                "rounded-full font-bold transition-all duration-300 relative overflow-hidden group",
                isScrolled ? "h-9 px-4 text-sm" : "h-11 px-6 text-base",
                "border-primary text-primary hover:bg-primary hover:text-white hover:scale-105"
              )}>
                <span className="relative z-10">Área do Cliente</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
              </Button>
            </Link>
          </div>

          {/* Menu Mobile - Sheet/Sidebar */}
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5">
                  <Menu size={32} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[380px] pt-12 border-l border-border/50 backdrop-blur-xl bg-white/95">
                <SheetTitle className="sr-only">
                  Menu de navegação
                </SheetTitle>

                <div className="mb-8 flex items-center justify-start">
                  <Image
                    src="/SupremaIcon.png"
                    width={48}
                    height={48}
                    alt="Suprema Analítica Logo"
                    className="mr-3"
                  />
                  <span className="text-xl font-bold text-primary tracking-tight">Suprema Analítica</span>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {/* Sobre nós Accordion */}
                  <AccordionItem value="sobre-nos" className="border-b-0">
                    <AccordionTrigger className="py-4 text-lg font-semibold text-primary hover:no-underline hover:text-greenSup transition-colors">
                      Sobre nós
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4 border-l-2 border-primary/10 ml-1">
                        {navAboutItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center justify-between py-3 text-base font-medium text-foreground hover:text-greenSup transition-colors group"
                          >
                            {item.title}
                            <ChevronRight size={16} className="text-muted-foreground group-hover:text-greenSup transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Serviços Accordion */}
                  <AccordionItem value="servicos" className="border-b-0">
                    <AccordionTrigger className="py-4 text-lg font-semibold text-primary hover:no-underline hover:text-greenSup transition-colors">
                      Serviços
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4 border-l-2 border-primary/10 ml-1">
                        {navServicesItems.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="flex items-center justify-between py-3 text-base font-medium text-foreground hover:text-greenSup transition-colors group"
                          >
                            {service.title}
                            <ChevronRight size={16} className="text-muted-foreground group-hover:text-greenSup transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Links diretos */}
                <div className="mt-2 border-t border-border/40 pt-2">
                  <Link
                    href="/contato"
                    className="flex items-center justify-between py-4 text-lg font-semibold text-primary hover:text-greenSup transition-colors group"
                  >
                    Contato
                    <ChevronRight size={20} className="text-muted-foreground group-hover:text-greenSup transition-colors" />
                  </Link>
                </div>

                {/* Botões de Ação */}
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="#contato">
                    <Button className="w-full py-6 rounded-full bg-greenSup text-white font-bold text-lg hover:bg-greenSup-dark shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
                      <span className="relative z-10">Solicitar Orçamento</span>
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                    </Button>
                  </Link>
                  <Link href="https://portal.mylimsweb.cloud/Login" target="_blank">
                    <Button variant="outline" className="w-full py-6 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-white transition-all relative overflow-hidden group">
                      <span className="relative z-10">Área do Cliente</span>
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Gradient Border */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-greenSup via-primary to-greenSup opacity-0 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
      </motion.header>
    </>
  );

};