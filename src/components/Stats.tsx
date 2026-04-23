"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
  decimals?: number;
};

const stats: Stat[] = [
  { value: 127, suffix: "+", label: "Landing pages entregues", sub: "Desde 2021" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos", sub: "Avaliação média 5★" },
  { value: 3.2, suffix: "x", decimals: 1, label: "Aumento médio de conversão", sub: "Vs. site anterior" },
  { value: 5, prefix: "até ", suffix: " dias", label: "Tempo médio de entrega", sub: "Do briefing ao ar" },
];

const Counter = ({ value, decimals = 0, prefix = "", suffix = "", play }: { value: number; decimals?: number; prefix?: string; suffix?: string; play: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${v.toFixed(decimals).replace(".", ",")}${suffix}`);

  useEffect(() => {
    if (!play) return;
    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [count, play, value]);

  return <motion.span>{rounded}</motion.span>;
};

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-24 px-4 bg-black border-y border-white/5 relative overflow-hidden"
      aria-label="Resultados em números"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-12"
        >
          Resultados que falam por si
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950/95 p-8 md:p-10 flex flex-col items-center text-center"
            >
              <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 tabular-nums leading-none">
                <Counter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  play={inView}
                />
              </div>
              <p className="mt-4 text-white font-semibold text-base md:text-lg">
                {s.label}
              </p>
              <p className="mt-1 text-zinc-500 text-xs md:text-sm">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
