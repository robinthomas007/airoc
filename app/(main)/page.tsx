import Contact from "@/app/components/sections/Contact";
import Hero from "@/app/components/sections/Hero";
import HowItWorks from "@/app/components/sections/HowItWorks";
import ModernWebStack from "@/app/components/sections/ModernWebStack";
import Pricing from "@/app/components/sections/Pricing";
import Services from "@/app/components/sections/Services";
import Technology from "@/app/components/sections/Technology";
import Testimonials from "@/app/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <ModernWebStack />
      <Technology />
      <Testimonials />
      <Contact />
    </main>
  );
}
