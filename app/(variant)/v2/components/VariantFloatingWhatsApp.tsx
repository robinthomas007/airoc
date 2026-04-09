import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';
import { whatsAppGradientStyle } from '@/app/lib/whatsapp-style';

import { WhatsAppIcon } from './icons';

export default function VariantFloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(
        `Hi ${siteConfig.name}, I want to discuss a website for my business.`,
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_18px_36px_rgba(18,140,126,0.26)] transition duration-300 hover:scale-105 hover:brightness-105"
      style={whatsAppGradientStyle}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
