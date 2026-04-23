import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main
      id="main"
      className="relative bg-[#0a0a0a] min-h-screen w-full flex flex-col items-center overflow-hidden"
    >
      <Navbar />
      <Hero />
      <Logos />
      <Stats />
      <Problem />
      <Solution />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
