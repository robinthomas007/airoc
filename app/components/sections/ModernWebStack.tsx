import { Paper, Text, Title } from '@mantine/core';

const stackBenefits = [
  {
    title: 'Performance First',
    description:
      'Fast-loading pages, smooth interactions, and optimized rendering that keep visitors engaged.',
    stat: 'Speed',
  },
  {
    title: 'Scalable Structure',
    description:
      'Clean architecture that makes it easier to grow from a simple site into a larger product over time.',
    stat: 'Scale',
  },
  {
    title: 'SEO & Visibility',
    description:
      'Technical foundations that help your website stay discoverable, crawlable, and business-ready.',
    stat: 'SEO',
  },
  {
    title: 'Easy Maintenance',
    description:
      'A modern stack that keeps updates, content changes, and future improvements manageable.',
    stat: 'Support',
  },
];

export default function ModernWebStack() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1220_35%,#09111d_100%)] px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.14),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            Modern Web Stack
          </Text>
          <Title order={2} className="mt-4 text-4xl font-semibold tracking-tight text-white">
            The stack is modern because the outcome needs to be dependable.
          </Title>
          <Text className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We choose modern tools not just because they are popular, but because
            they help your website stay fast, scalable, secure, and easier to
            maintain as your business grows.
          </Text>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stackBenefits.map((item) => (
            <Paper
              key={item.title}
              radius={30}
              p="xl"
              className="group relative overflow-hidden border border-white/12 bg-white/[0.06] shadow-[0_16px_38px_rgba(15,23,42,0.24)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:shadow-[0_22px_50px_rgba(34,211,238,0.12)]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.6rem] border border-cyan-300/15 bg-slate-950/80 text-sm font-semibold tracking-[0.18em] text-cyan-200">
                {item.stat}
              </div>

              <Text className="mt-6 text-lg font-medium text-white">
                {item.title}
              </Text>
              <Text className="mt-3 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">
                {item.description}
              </Text>
            </Paper>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Text className="text-base text-slate-400">
            Modern tools matter most when they create a better experience for your business and your customers.
          </Text>
        </div>
      </div>
    </section>
  );
}
