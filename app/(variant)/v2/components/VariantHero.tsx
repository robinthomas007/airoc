import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';
import { whatsAppGradientStyle } from '@/app/lib/whatsapp-style';

import { SparkIcon, WhatsAppIcon } from './icons';

export default function VariantHero() {
  return (
    <section
      id="hero"
      className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f6f7ff_100%)] px-6 pt-16 pb-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="variant-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eaedff] px-4 py-2 text-sm font-semibold text-[#5956e9]">
              <SparkIcon className="h-4 w-4" />
              Trusted by small businesses &amp; startups
            </div>
          </div>

          <h1 className="variant-fade-up mt-9 text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-[76px] lg:leading-[1.05]">
            Build websites that bring
            <br />
            you <span className="text-[#5956e9]">more customers.</span>
          </h1>

          <p className="variant-fade-up mx-auto mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            We create modern, fast, and professional websites designed to grow
            your business.
          </p>

          <div className="variant-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppLink(
                `Hi ${siteConfig.name}, I want to discuss a website for my business.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(18,140,126,0.2)] transition duration-300 hover:-translate-y-1 hover:brightness-105 hover:shadow-[0_22px_36px_rgba(18,140,126,0.24)]"
              style={whatsAppGradientStyle}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
