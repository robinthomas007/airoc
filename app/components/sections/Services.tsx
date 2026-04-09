import { Button } from '@mantine/core';

const services = [
  {
    title: 'Website Development',
    description:
      'Modern, responsive websites built to present your brand clearly and convert visitors into enquiries.',
    benefit: 'Convert visitors into real enquiries',
    pricing: 'Starting from ₹4999',
    icon: '</>',
    popular: true,
  },
  {
    title: 'Business Websites',
    description:
      'Professional company websites designed for trust, visibility, and a polished online presence.',
    benefit: 'Build credibility with a premium web presence',
    pricing: 'Starting from ₹7999',
    icon: 'B',
    popular: false,
  },
  {
    title: 'Dynamic Web Applications',
    description:
      'Interactive platforms with custom functionality, dashboards, forms, and business workflows.',
    benefit: 'Streamline operations with custom workflows',
    pricing: 'Starting from ₹14999',
    icon: '{ }',
    popular: true,
  },
  {
    title: 'Domain Registration',
    description:
      'We help you secure and manage the right domain name for your business and brand identity.',
    benefit: 'Get your business online with the right domain',
    pricing: 'Starting from ₹999',
    icon: 'D',
    popular: false,
  },
  {
    title: 'Business Email Setup',
    description:
      'Professional email configuration so your team can communicate with credibility using your domain.',
    benefit: 'Look more professional in every client conversation',
    pricing: 'Starting from ₹1499',
    icon: '@',
    popular: false,
  },
  {
    title: 'Hosting & Deployment',
    description:
      'Reliable deployment setup with fast hosting, launch support, and production-ready configuration.',
    benefit: 'Launch faster with secure and stable hosting',
    pricing: 'Starting from ₹2499',
    icon: 'H',
    popular: false,
  },
  {
    title: 'Website Maintenance & Support',
    description:
      'Ongoing updates, improvements, fixes, and support to keep your website healthy and effective.',
    benefit: 'Keep your website performing without downtime stress',
    pricing: 'Starting from ₹1999/month',
    icon: 'M',
    popular: false,
  },
];

const reasons = [
  'Fast, modern builds using Next.js and a clean component architecture',
  'Responsive layouts that look premium on mobile, tablet, and desktop',
  'Clear conversion paths with forms, WhatsApp, and business-focused messaging',
];

const whyChoosePoints = [
  'Fast delivery',
  'Affordable pricing',
  'Modern design',
  'Mobile optimized',
  'Ongoing support',
];

export default function Services() {
  return (
    <>
      <section id="services" className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Complete web solutions for your business
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_24px_60px_rgba(2,6,23,0.22)] transition duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-indigo-300/40 hover:bg-white/[0.05] hover:shadow-[0_28px_70px_rgba(99,102,241,0.16)]"
              >
                {service.popular ? (
                  <div className="absolute right-5 top-5 inline-flex rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100">
                    Popular
                  </div>
                ) : null}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 text-lg font-semibold text-white ring-1 ring-inset ring-indigo-300/20">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#9b9bff]">
                  {service.benefit}
                </p>
                <p className="mt-3 text-sm text-slate-500">{service.pricing}</p>

                <Button
                  component="a"
                  href="#contact"
                  radius="xl"
                  variant="default"
                  className="mt-6 border border-white/10 bg-white/5 text-white hover:bg-white/10"
                >
                  Get Started
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-[#07111f] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
              Why AiRoc
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              We combine visual polish with practical business thinking.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {whyChoosePoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                >
                  <span className="mr-2 text-[#9b9bff]">✔</span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-slate-300"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
