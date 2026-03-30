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
           className="mt-20 w-full max-w-5xl relative"
        >
          {/* Mockup do Laptop */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-[16/10] bg-zinc-900 rounded-t-2xl lg:rounded-t-[32px] border-t-8 border-l-8 border-r-8 border-zinc-800 shadow-2xl overflow-hidden"
          >
            {/* Imagem/Mockup Placeholder Brilhante */}
            <div className="w-full h-8 bg-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-black relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full max-w-[280px] md:max-w-md pointer-events-auto z-10">
                 <GlobePulse />
              </div>
            </div>
          </motion.div>
          {/* Base do Laptop */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110%] -ml-[5%] h-6 bg-zinc-700 border-t border-zinc-600 rounded-b-xl shadow-[0_30px_50px_-10px_rgba(0,0,0,0.8)]" 
          />
        </motion.div>

      </div>
    </section>
  );
};
