import { serviceItems } from './data';

export default function VariantServices() {
  return (
    <section id="services" className="bg-[#f7f8ff] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-800 mb-4 font-medium tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Complete website solutions for your business
          </p>
          <div className="mt-6 inline-flex rounded-full bg-[#eaedff] px-5 py-2 text-lg font-semibold text-[#5956e9]">
            Starting from ₹4999
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="variant-card-hover variant-fade-up rounded-[2rem] border border-slate-200 bg-white p-9 shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5956e9] text-white shadow-[0_12px_24px_rgba(89,86,233,0.22)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-[2rem] leading-tight font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-5 text-xl leading-10 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
