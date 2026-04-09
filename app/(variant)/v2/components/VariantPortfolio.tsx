import Image from 'next/image';

import { portfolioItems } from './data';

export default function VariantPortfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#1e2638] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-medium tracking-tight">Our Work</h2>
          <p className="mt-5 text-xl text-slate-400">
            A few examples of what we can build
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            return (
              <article
                key={item.title}
                className="group variant-card-hover variant-fade-up overflow-hidden rounded-[2rem] border border-white/10 bg-[#2a3346]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-[#3c4960]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-transparent to-slate-950/30" />
                </div>
                <div className="px-9 py-8">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-400">
                    {item.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold tracking-[0.18em] uppercase text-[#7f83ff]">
                    {item.tag}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
