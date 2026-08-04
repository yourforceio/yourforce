import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WhyChoose />
      <Process />
      <CTA />
    </main>
  );
}
