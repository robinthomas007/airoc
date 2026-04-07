import Image from 'next/image';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm text-slate-300 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="h-14 w-[190px]">
            <Image
              src="/airoc-logo-brand-light.png"
              alt={siteConfig.name}
              width={623}
              height={228}
              unoptimized
              className="h-full w-full object-contain object-left"
            />
          </div>
          <p className="mt-4 max-w-md text-slate-400">{siteConfig.description}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {siteConfig.navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Connect</p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-cyan-300"
            >
              {siteConfig.email}
            </a>
            <a
              href={buildWhatsAppLink(
                `Hi ${siteConfig.name}, I want to discuss a website project.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
