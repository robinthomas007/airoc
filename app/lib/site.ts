export const siteConfig = {
  name: 'AiRoc Solutions',
  tagline: 'Adaptive. Reactive. Creative.',
  description:
    'AiRoc Solutions builds premium websites and digital experiences that help businesses earn trust and generate enquiries.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@airocsolutions.com',
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999',
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}
