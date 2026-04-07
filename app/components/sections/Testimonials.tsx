import { Text, Title } from '@mantine/core';

const testimonials = [
  {
    quote:
      'AiRoc Solutions gave our business a clean and professional website that made us look far more established online.',
    name: 'Rohan Mehta',
    role: 'Business Owner',
  },
  {
    quote:
      'The process was smooth from start to finish. Communication was clear, delivery was fast, and the final site looked excellent.',
    name: 'Priya Sharma',
    role: 'Startup Founder',
  },
  {
    quote:
      'They understood what we needed and built a website that feels modern, responsive, and much easier for customers to trust.',
    name: 'Arjun Verma',
    role: 'Business Owner',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
            Testimonials
          </Text>
          <Title order={2} className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Trusted by growing businesses.
          </Title>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_45px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:border-indigo-300/25 hover:shadow-[0_24px_55px_rgba(15,23,42,0.24)]"
            >
              <p className="text-lg leading-8 text-slate-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
