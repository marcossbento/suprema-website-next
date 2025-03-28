"use client";
import ClientsSection from "@/components/clients";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer-sup";
import { Header } from "@/components/header-sup";
import { EmblaCarousel } from "@/components/hero-slider";
import ServiceCards from "@/components/service-cards";
import { NossaEstrutura } from "@/components/structure";
import WhyChooseUs from "@/components/why-choose-us";

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
        <WhyChooseUs></WhyChooseUs>
        <ClientsSection />
        <ContactSection />
      </div>
      <Footer></Footer>
    </main>
  );
}
