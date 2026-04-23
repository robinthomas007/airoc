import type { Metadata } from 'next';

import { siteConfig } from '@/app/lib/site';

import VariantContact from './components/VariantContact';
import VariantFloatingWhatsApp from './components/VariantFloatingWhatsApp';
import VariantFooter from './components/VariantFooter';
import VariantHeader from './components/VariantHeader';
import VariantHero from './components/VariantHero';
import VariantHowItWorks from './components/VariantHowItWorks';
import VariantPortfolio from './components/VariantPortfolio';
import VariantPricing from './components/VariantPricing';
import VariantServices from './components/VariantServices';
import VariantTechnology from './components/VariantTechnology';
import VariantTestimonials from './components/VariantTestimonials';
import VariantWhyChoose from './components/VariantWhyChoose';

export const metadata: Metadata = {
  title: `AiRoc Solutions V2 | ${siteConfig.title}`,
  description:
    'An updated clean SaaS-style landing page concept for AiRoc Solutions.',
};

export default function VariantPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <VariantHeader />
      <VariantHero />
      <VariantWhyChoose />
      <VariantServices />
      <VariantPricing />
      <VariantHowItWorks />
      <VariantPortfolio />
      <VariantTechnology />
      <VariantTestimonials />
      <VariantContact />
      <VariantFooter />
      <VariantFloatingWhatsApp />
    </main>
  );
}
