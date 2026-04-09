import { processSteps } from './data';

export default function VariantHowItWorks() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-medium tracking-tight text-slate-900">
          How It Works
        </h2>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="variant-fade-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto flex h-30 w-30 items-center justify-center rounded-full border-[3px] border-[#5956e9] text-5xl font-semibold text-[#5956e9]">
                {step.number}
              </div>
              <h3 className="mt-10 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mx-auto mt-5 max-w-sm text-xl leading-9 text-slate-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
