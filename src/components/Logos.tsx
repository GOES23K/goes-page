"use client";


const TECH_LOGOS = [
  "Next.js", "React", "Tailwind CSS", "TypeScript", 
  "Framer Motion", "Vercel", "Figma", "WordPress",
  "Next.js", "React", "Tailwind CSS", "TypeScript", 
];

export const Logos = () => {
  return (
    <section className="w-full bg-neutral-900/50 py-10 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-8">
          Tecnologias que eu domino
        </span>
        
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] w-full">
          <div className="flex shrink-0 animate-marquee gap-8 md:gap-16 px-4">
            {TECH_LOGOS.map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center text-zinc-400 font-display font-bold text-xl md:text-2xl whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee gap-8 md:gap-16 px-4" aria-hidden="true">
            {TECH_LOGOS.map((tech, idx) => (
              <div 
                key={`clone-${idx}`}
                className="flex items-center text-zinc-400 font-display font-bold text-xl md:text-2xl whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
