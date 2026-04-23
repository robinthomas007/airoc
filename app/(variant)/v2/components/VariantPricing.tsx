import { pricingPlans } from './data';

export default function VariantPricing() {
  return (
    <section
      id="pricing"
      className="border-t border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7ff_100%)] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tight text-slate-900">
            Pricing
          </h2>
          <p className="mt-3 text-gray-500">
            Simple packages to help you choose faster
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.name}
              className={`variant-card-hover variant-fade-up rounded-[2rem] border bg-white p-8 shadow-sm transition duration-300 ${
                plan.popular
                  ? 'border-indigo-200 shadow-lg shadow-indigo-100/60'
                  : 'border-gray-100'
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {plan.popular ? (
                <div className="inline-flex rounded-full bg-indigo-50 px-4 py-1 text-sm font-bold text-indigo-600">
                  Popular
                </div>
              ) : null}

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <p className="mt-4 leading-6 text-gray-500">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="text-sm leading-6 text-gray-600">
                    <span className="mr-2 font-bold text-indigo-600">✔</span>
                    {feature}
                  </p>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-bold transition-all ${
                  plan.popular
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 active:scale-[0.98]'
                    : 'border border-gray-200 bg-white text-slate-900 hover:border-indigo-600 hover:text-indigo-600'
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
