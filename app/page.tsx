"use client";
import { Header } from "@/components/header-sup";
import { EmblaCarousel } from "@/components/hero-slider";
import ServiceCards from "@/components/service-cards";

export default function Home() {

  return (
    <main className="bg-primary flex min-h-screen flex-col">
      <Header />
      <div className="relative overflow-hidden w-7xl h-dvh">
        <EmblaCarousel />
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="text-5xl font-bold text-white pb-6">Nossos <span className="text-greenSup">Serviços</span></h1>
        <ServiceCards />
      </div>
    </main>
  );
}
