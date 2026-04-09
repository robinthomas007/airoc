import { testimonials } from './data';

export default function VariantTestimonials() {
  return (
    <section className="bg-[linear-gradient(180deg,#5b52e8_0%,#4c46d8_100%)] px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-[3.5rem] md:leading-[1.1]">
          What Our Clients Say
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="variant-fade-up rounded-[2rem] border border-white/15 bg-white/10 px-8 py-10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/12 md:px-12 md:py-12"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-2 text-lg text-[#ffd34d] md:text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-8 max-w-[32rem] text-[1.05rem] leading-[1.75] italic text-white/95 md:mt-10 md:text-[1.55rem] md:leading-[1.6]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center gap-4 md:mt-12 md:gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-2xl font-semibold text-white md:h-16 md:w-16 md:text-3xl">
                  {item.initial}
                </div>
                <div>
                  <p className="text-xl font-semibold md:text-[1.6rem]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base text-white/65 md:text-[1.1rem]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
