'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import VersionSwitcher from '@/app/components/layout/VersionSwitcher';
import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';
import { whatsAppGradientStyle } from '@/app/lib/whatsapp-style';

import { WhatsAppIcon } from './icons';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function VariantHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/v2" className="flex items-center gap-3">
          <div className="h-12 w-[210px]">
            <Image
              src="/airoc-logo.png"
              alt={siteConfig.name}
              width={623}
              height={228}
              unoptimized
              className="h-full w-full object-contain object-left"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <VersionSwitcher current="v2" />
          <a
            href={buildWhatsAppLink(
              `Hi ${siteConfig.name}, I want to discuss a website for my business.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(18,140,126,0.24)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 md:inline-flex"
            style={whatsAppGradientStyle}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <VersionSwitcher current="v2" />
          </div>
          {navItems.map((item) => (
            <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink(
                `Hi ${siteConfig.name}, I want to discuss a website for my business.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white hover:brightness-105"
              style={whatsAppGradientStyle}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
