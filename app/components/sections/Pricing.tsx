import { Button, Text, Title } from '@mantine/core';

const plans = [
  {
    name: 'Basic',
    price: '₹4,999+',
    description: 'A clean starter website for small businesses that need a simple online presence.',
    features: ['Single-page website', 'Mobile responsive design', 'Contact section included'],
  },
  {
    name: 'Standard',
    price: '₹9,999+',
    description: 'A business-ready website with stronger structure, trust signals, and better lead flow.',
    features: ['Multi-section website', 'WhatsApp + enquiry integration', 'SEO-friendly structure'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹19,999+',
    description: 'A more advanced website experience for brands that need scale, polish, and flexibility.',
    features: ['Custom UI sections', 'Dynamic features or CMS support', 'Priority support and launch help'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
            Pricing
          </Text>
          <Title order={2} className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Simple packages to help you choose faster.
          </Title>
          <Text className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Start with a plan that fits your business today, then scale as your website needs grow.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-[0_20px_48px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,23,42,0.22)] ${
                plan.popular
                  ? 'border-indigo-300/40 bg-white/[0.06]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.popular ? (
                <div className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100">
                  Popular
                </div>
              ) : null}

              <h3 className="mt-5 text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold text-white">{plan.price}</p>
              <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="text-sm text-slate-300">
                    <span className="mr-2 text-[#9b9bff]">✔</span>
                    {feature}
                  </p>
                ))}
              </div>

              <Button
                component="a"
                href="#contact"
                radius="xl"
                className="mt-7 bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                Get Started
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
