import { whyChooseItems } from './data';

export default function VariantWhyChoose() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-medium tracking-tight text-slate-900">
          Why Choose AiRoc Solutions?
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="variant-fade-up text-center"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div
                  className={`mx-auto flex h-18 w-18 items-center justify-center rounded-3xl ${item.accent}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-500">
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
