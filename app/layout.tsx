import '@mantine/core/styles.css';
import './globals.css';

import { createTheme, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import SiteFooter from '@/app/components/layout/SiteFooter';
import SiteHeader from '@/app/components/layout/SiteHeader';
import FloatingWhatsAppButton from '@/app/components/layout/FloatingWhatsAppButton';
import { siteConfig } from '@/app/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const theme = createTheme({
  primaryColor: 'indigo',
  defaultRadius: 'md',
  fontFamily: 'var(--font-inter), sans-serif',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MantineProvider theme={theme}>
          <div className="min-h-screen bg-slate-950 text-white">
            <SiteHeader />
            {children}
            <SiteFooter />
            <FloatingWhatsAppButton />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
