import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import ModernWebStack from "./components/sections/ModernWebStack";
import Services from "./components/sections/Services";
import Technology from "./components/sections/Technology";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <ModernWebStack />
      <Technology />
      <Testimonials />
      <Contact />
    </main>
  );
}
