import { Button } from '@mantine/core';

import { buildWhatsAppLink, siteConfig } from '@/app/lib/site';

const metrics = [
  { label: 'Launch speed', value: '7-21 days' },
  { label: 'Best for', value: 'Small businesses & startups' },
  { label: 'Focus', value: 'More enquiries' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(139,92,246,0.18),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex max-w-full items-center justify-center rounded-full border border-indigo-300/25 bg-indigo-300/10 px-4 py-2 text-center text-xs font-semibold tracking-[0.2em] text-indigo-100 uppercase sm:text-left sm:tracking-[0.24em]">
            Premium business websites
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            We build modern websites that help your business get more customers.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {siteConfig.name} helps founders and teams launch modern websites with
            fast delivery, strong visual polish, and contact flows built for real
            enquiries.
          </p>

          <p className="mt-5 text-sm font-semibold tracking-[0.22em] text-[#9b9bff] uppercase">
            {siteConfig.tagline}
          </p>

          <p className="mt-4 text-sm font-medium text-slate-300">
            Trusted by small businesses &amp; startups
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              component="a"
              href={buildWhatsAppLink(
                `Hi ${siteConfig.name}, I want a modern website for my business.`,
              )}
              target="_blank"
              rel="noreferrer"
              size="lg"
              radius="xl"
              className="px-8 text-slate-950 hover:bg-cyan-300"
            >
              Chat on WhatsApp
            </Button>
            <Button
              component="a" 
              href="#contact"
              size="lg"
              variant="default"
              radius="xl"
              className="border border-white/15 bg-white/5 px-8 text-white hover:bg-white/10"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Launch package</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  Business Growth Site
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Available now
              </span>
            </div>

            <div className="mt-8 grid gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                >
                  <span className="text-sm text-slate-400">{metric.label}</span>
                  <span className="text-sm font-semibold text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 p-[1px]">
              <div className="rounded-2xl bg-slate-950/90 px-5 py-4">
                <p className="text-sm text-slate-300">
                  Positioning, responsive UI, clear CTAs, WhatsApp integration,
                  and a contact funnel ready from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
