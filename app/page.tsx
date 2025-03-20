"use client";
import ClientsSection from "@/components/clients";
import { Header } from "@/components/header-sup";
import { EmblaCarousel } from "@/components/hero-slider";
import ServiceCards from "@/components/service-cards";
import { NossaEstrutura } from "@/components/structure";

export default function Home() {

  return (
    <main className="bg-primary flex min-h-screen flex-col">
      <Header />
      <div className="relative overflow-hidden">
        <EmblaCarousel />
      </div>
      <div className="flex flex-col items-center justify-center">
        <ServiceCards />
        <NossaEstrutura />
        <ClientsSection />
      </div>
    </main>
  );
}
