import { Paper, Text } from '@mantine/core';

const stackBenefits = [
  {
    title: 'Fast Performance',
    description:
      'Your website loads quickly and runs smoothly, keeping visitors engaged.',
  },
  {
    title: 'Scalable Growth',
    description:
      'Built in a way that allows your website to grow as your business expands.',
  },
  {
    title: 'SEO Ready',
    description:
      'Optimized structure that helps your business appear on Google and reach more customers.',
  },
  {
    title: 'Easy Maintenance',
    description:
      'Simple updates and changes so your website stays fresh without hassle.',
  },
];

export default function ModernWebStack() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1220_35%,#09111d_100%)] px-6 py-20 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.14),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            Why Our Websites Work Better
          </Text>
          
          <Text className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
           We use the latest tools to ensure your website is fast, reliable, and ready to grow with your business.
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
              <Text className="text-lg font-semibold text-cyan-600">
                {item.title}
              </Text>
              <Text className="mt-8 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">
                {item.description}
              </Text>
            </Paper>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Text className="text-sm text-slate-500">
            Powered by modern technologies like React, Next.js, and more
          </Text>
        </div>
      </div>
    </section>
  );
}
