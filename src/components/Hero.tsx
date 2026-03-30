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
    <div className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-center leading-tight tracking-tight text-white max-w-5xl mx-auto">
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={complete ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className={`inline-block mr-2 md:mr-3 lg:mr-4 ${word === "Cliente" || word === "Comprar" ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30 md:opacity-30 opacity-20 mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] hidden sm:block">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(100deg,var(--color-brand-blue)_10%,var(--color-brand-cyan)_30%,var(--color-brand-purple)_50%,var(--color-brand-blue)_70%)] [background-size:200%_100%] md:animate-aurora mix-blend-screen filter blur-[40px] md:blur-[60px]" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs md:text-sm font-medium text-white/90">🚀 Vagas limitadas este mês</span>
        </motion.div>

        <TextGenerate words="Landing Pages que Fazem Seu Cliente Parar de Rolar e Começar a Comprar" />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-6 text-base md:text-xl text-zinc-400 text-center max-w-3xl leading-relaxed"
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
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] hover:scale-105"
          >
            Falar no WhatsApp
          </Link>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center justify-center text-center hover:scale-105"
          >
            Ver Portfólio
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
           className="mt-20 md:mt-32 w-full max-w-5xl flex justify-center relative mb-10"
        >
          {/* Floating Globe */}
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
