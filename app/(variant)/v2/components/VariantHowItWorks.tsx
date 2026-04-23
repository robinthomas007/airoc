import { processSteps } from './data';

export default function VariantHowItWorks() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-medium tracking-tight text-slate-900">
          How It Works
        </h2>

        <div className="mt-18 grid gap-12 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="variant-fade-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#5956e9] text-3xl font-semibold text-[#5956e9] hover:bg-indigo-600 hover:text-white">
                {step.number}
              </div>
              <h3 className="mt-10 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-sm leading-6 text-gray-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
