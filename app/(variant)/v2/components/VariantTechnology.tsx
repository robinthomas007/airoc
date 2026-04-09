import { technologyBenefits } from './data';

export default function VariantTechnology() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl md:leading-[1.12]">
            Built with Modern Technology
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-[1.05rem] md:leading-[1.55]">
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
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef1ff] text-[#5956e9]">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-[1.45rem] font-semibold leading-tight text-slate-900 md:text-[1.05rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-500 md:text-[0.95rem] md:leading-[1.55]">
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
          <div className="absolute inset-3 rounded-[3rem] border border-[#d8ddff] bg-[#edf0ff] p-8">
            <div className="grid h-full grid-cols-2 gap-8">
              {['React', 'Tailwind', 'Next.js', 'Vercel'].map((item, index) => (
                <div
                  key={item}
                  className="variant-card-hover variant-fade-up flex items-center justify-center rounded-[1.6rem] bg-white text-xl font-semibold text-[#5956e9] shadow-[0_12px_28px_rgba(15,23,42,0.06)] md:text-[1.1rem]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
