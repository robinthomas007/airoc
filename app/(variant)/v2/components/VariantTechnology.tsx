import Image from 'next/image';

import { technologyBenefits } from './data';

const technologyStack = [
  {
    name: 'React',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    tint: 'bg-sky-50',
  },
  {
    name: 'Tailwind',
    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    tint: 'bg-cyan-50',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.simpleicons.org/nextdotjs/111827',
    tint: 'bg-slate-100',
  },
  {
    name: 'Vercel',
    logo: 'https://cdn.simpleicons.org/vercel/111827',
    tint: 'bg-slate-100',
  },
];

export default function VariantTechnology() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <h2 className="text-3xl md:text-4xl font-800 mb-6">
            Built with Modern Technology
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            We use the latest tools and best practices to ensure your website is
            fast, reliable, and ready to grow with your business.
          </p>

          <div className="mt-12 grid gap-7 sm:grid-cols-2">
            {technologyBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="variant-fade-up flex items-start gap-4"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[620px]">
          <div className="absolute inset-6 rotate-[-7deg] rounded-[3rem] bg-[#dfe3ff] opacity-80" />
          <div className="absolute inset-0 rotate-[2deg] rounded-[3rem] border border-[#d8ddff] bg-[#edf0ff]" />
          <div className="absolute inset-3 rounded-[3rem] border border-[#d8ddff] bg-[#edf0ff] p-8 md:p-10">
            <div className="grid h-full grid-cols-2 gap-6">
              {technologyStack.map((item, index) => (
                <div
                  key={item.name}
                  className="variant-card-hover variant-fade-up flex items-center rounded-[1.6rem] border border-white/80 bg-white/95 px-5 py-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)] backdrop-blur"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.tint}`}
                    >
                      <div className="relative h-6 w-6 shrink-0">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          unoptimized
                          sizes="24px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Stack
                      </p>
                      <span className="mt-1 block text-base font-bold text-indigo-600">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
