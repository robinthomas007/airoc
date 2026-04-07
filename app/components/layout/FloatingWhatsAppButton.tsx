import Image from 'next/image';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(
        `Hi ${siteConfig.name}, I want to discuss a website for my business.`,
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.2)] transition duration-300 hover:scale-105 hover:bg-slate-100 md:bottom-8 md:right-8"
    >
      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
        <Image
          src="/whatsapp-icon.webp"
          alt="WhatsApp"
          width={36}
          height={36}
          className="h-9 w-9 object-cover"
        />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
