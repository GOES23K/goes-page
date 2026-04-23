"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlobePulse } from "./ui/cobe-globe-pulse";

const TextGenerate = ({ words }: { words: string }) => {
  const [complete, setComplete] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-center leading-[1.05] tracking-tight text-white max-w-5xl mx-auto text-balance">
      {wordsArray.map((word, idx) => {
        const highlight = word === "Cliente" || word === "Comprar";
        return (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={complete ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            className={`inline-block mr-2 md:mr-3 lg:mr-4 ${
              highlight
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]"
                : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </h1>
  );
};

const AvatarStack = () => {
  const avatars = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
  ];
  return (
    <div className="flex -space-x-2" aria-hidden="true">
      {avatars.map((grad, i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br ${grad}`}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Aurora background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
        aria-hidden="true"
      >
        <div className="absolute -inset-[10px] opacity-20 md:opacity-30 hidden sm:block">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(100deg,var(--color-brand-blue)_10%,var(--color-brand-cyan)_30%,var(--color-brand-purple)_50%,var(--color-brand-blue)_70%)] [background-size:200%_100%] motion-safe:md:animate-aurora mix-blend-screen filter blur-[40px] md:blur-[60px]" />
        </div>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-xs md:text-sm font-medium text-white/90">
            Vagas limitadas este mês
          </span>
        </motion.div>

        <TextGenerate words="Landing Pages que Fazem Seu Cliente Parar de Rolar e Começar a Comprar" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-6 text-base md:text-xl text-zinc-400 text-center max-w-3xl leading-relaxed text-balance"
        >
          Design cinematográfico + copy persuasiva + tecnologia de ponta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center"
        >
          <Link
            href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] motion-safe:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Falar no WhatsApp
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center justify-center text-center motion-safe:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Ver Portfólio
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-5"
        >
          <AvatarStack />
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <div className="flex gap-0.5 text-yellow-400" aria-label="Avaliação 5 de 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                </svg>
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">127+</span> clientes •{" "}
              <span className="text-white font-semibold">98%</span> satisfeitos
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-16 md:mt-24 w-full max-w-5xl flex justify-center relative mb-10"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[320px] md:max-w-[500px] pointer-events-auto z-10"
          >
            <GlobePulse />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
