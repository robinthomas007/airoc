import { testimonials } from './data';

export default function VariantTestimonials() {
  return (
    <section className="bg-[linear-gradient(180deg,#5b52e8_0%,#4c46d8_100%)] px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-medium tracking-tight text-white">
          What Our Clients Say
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-2 text-lg text-[#ffd34d] md:text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-8 max-w-[32rem] text-lg leading-8 italic text-white/95">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4 md:mt-12 md:gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-2xl font-bold text-white md:h-16 md:w-16 md:text-3xl">
                  {item.initial}
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
