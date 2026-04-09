'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Burger, Button, Drawer } from '@mantine/core';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';
import { whatsAppGradientStyle } from '@/app/lib/whatsapp-style';
import VersionSwitcher from '@/app/components/layout/VersionSwitcher';

export default function SiteHeader() {
  const [opened, setOpened] = useState(false);
  const whatsAppHref = buildWhatsAppLink(
    `Hi ${siteConfig.name}, I'd like to discuss a website for my business.`,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-[168px]">
            <Image
              src="/airoc-logo-brand-light.png"
              alt={siteConfig.name}
              width={623}
              height={228}
              unoptimized
              className="h-full w-full object-contain object-left"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <VersionSwitcher current="v1" />
          <Button
            component="a"
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            radius="xl"
            className="text-white hover:brightness-105"
            style={whatsAppGradientStyle}
          >
            Chat on WhatsApp
          </Button>
        </div>

        <Burger
          opened={opened}
          onClick={() => setOpened((current) => !current)}
          hiddenFrom="md"
          size="sm"
          color="#e2e8f0"
          aria-label="Toggle navigation"
        />
      </div>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="85%"
        padding="lg"
        hiddenFrom="md"
        title={siteConfig.name}
        styles={{
          content: {
            backgroundColor: '#020617',
            color: '#e2e8f0',
          },
          header: {
            backgroundColor: '#020617',
            color: '#e2e8f0',
          },
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <VersionSwitcher current="v1" />
          </div>
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 px-4 py-3 text-slate-100 transition hover:border-indigo-300/40 hover:bg-white/5"
              onClick={() => setOpened(false)}
            >
              {item.label}
            </a>
          ))}

          <Button
            component="a"
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            radius="xl"
            className="mt-2 text-white hover:brightness-105"
            style={whatsAppGradientStyle}
          >
            Start a WhatsApp Chat
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
