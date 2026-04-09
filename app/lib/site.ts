export const siteConfig = {
  name: 'AiRoc Solutions',
  tagline: 'Adaptive. Reactive. Creative.',
  title: 'Website Development for Businesses | AiRoc Solutions',
  description:
    'We build modern websites that help businesses get more customers.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airocsolutions.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@airocsolutions.com',
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919999999999',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+91 98765 43210',
  location: process.env.NEXT_PUBLIC_LOCATION ?? 'Silicon Valley, India',
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
