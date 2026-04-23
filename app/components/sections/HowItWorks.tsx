import { Text, Title } from '@mantine/core';

const steps = [
  {
    title: 'Share your requirement',
    description:
      'Tell us about your business, goals, pages, and any features you want included.',
    icon: '01',
  },
  {
    title: 'We design & build',
    description:
      'We shape the layout, write the sections, and build a responsive website around your needs.',
    icon: '02',
  },
  {
    title: 'Launch your website',
    description:
      'After review and final updates, we deploy your website and make it ready for customers.',
    icon: '03',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#07111f] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
            How It Works
          </Text>
          <Title order={2} className="mt-4 text-4xl font-semibold tracking-tight text-white">
            A simple process from idea to launch.
          </Title>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_50px_rgba(2,6,23,0.22)] transition duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 text-sm font-semibold tracking-[0.2em] text-white ring-1 ring-inset ring-indigo-300/20">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 leading-6 text-gray-500">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
