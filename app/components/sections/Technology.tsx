import Image from 'next/image';
import { Paper, Text, Title, Tooltip } from '@mantine/core';

const technologies = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/111827' },
  { name: 'Vue.js', logo: 'https://cdn.simpleicons.org/vuedotjs/42B883' },
  { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'GSAP', logo: 'https://cdn.simpleicons.org/greensock/88CE02' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Gatsby', logo: 'https://cdn.simpleicons.org/gatsby/663399' },
  { name: 'Astro', logo: 'https://cdn.simpleicons.org/astro/FF5D01' },
  { name: 'Strapi', logo: 'https://cdn.simpleicons.org/strapi/4945FF' },
  { name: 'CMS', logo: 'https://cdn.simpleicons.org/contentful/2478CC' },
];

function TechnologyCard({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <Tooltip label={name} withArrow color="dark" openDelay={100}>
      <Paper
        radius={28}
        p="xl"
        className="technology-card min-w-[160px] snap-center border border-slate-200/90 bg-white text-center shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:border-indigo-300/50 hover:shadow-[0_16px_32px_rgba(99,102,241,0.14)] md:min-w-[190px]"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-slate-50 shadow-inner ring-1 ring-slate-200/80">
          <div className="relative h-11 w-11 transition duration-300 hover:scale-105">
            <Image
              src={logo}
              alt={name}
              fill
              unoptimized
              sizes="44px"
              className="object-contain"
            />
          </div>
        </div>
        <Text className="mt-5 text-base font-semibold text-slate-900">{name}</Text>
      </Paper>
    </Tooltip>
  );
}

export default function Technology() {
  const track = [...technologies, ...technologies];

  return (
    <section id="technology" className="overflow-hidden bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Text className="text-sm font-semibold tracking-[0.24em] text-indigo-200 uppercase">
            Technologies We Use
          </Text>
          <Title order={2} className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Modern tools for serious web products.
          </Title>
          <Text className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            We use modern technologies to build fast, scalable, and high-performance
            websites and applications
          </Text>
        </div>

        <div className="mt-14 md:hidden">
          <div className="technology-scroll flex snap-x gap-5 overflow-x-auto pb-4">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.name} {...technology} />
            ))}
          </div>
        </div>

        <div className="relative mt-14 hidden overflow-hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="technology-marquee flex w-max gap-7 py-4">
            {track.map((technology, index) => (
              <TechnologyCard
                key={`${technology.name}-${index}`}
                {...technology}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
