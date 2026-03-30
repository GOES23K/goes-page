"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative w-full py-32 px-4 overflow-hidden" id="contato">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-20 mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] hidden sm:block">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(100deg,var(--color-brand-blue)_10%,var(--color-brand-cyan)_30%,var(--color-brand-purple)_50%,var(--color-brand-blue)_70%)] [background-size:200%_100%] md:animate-aurora mix-blend-screen filter blur-[40px] md:blur-[80px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-center text-white mb-6 tracking-tight leading-tight"
        >
          Pronto pra ter uma landing page que <span className="text-blue-500">realmente converte</span>?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 text-center mb-12"
        >
          Vagas limitadas. Entre em contato agora e garanta a sua.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="flex flex-col items-center gap-6"
        >
          <Link 
            href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page" target="_blank"
            className="group relative inline-flex items-center justify-center px-10 py-6 font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-110 focus:outline-none shadow-[0_0_60px_-15px_rgba(59,130,246,1)] hover:shadow-[0_0_100px_-20px_rgba(59,130,246,1)] text-xl overflow-hidden"
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-blue-400/50 group-hover:h-full transition-all duration-300 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle size={28} />
              Falar no WhatsApp Agora
            </span>
          </Link>

          <p className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 cursor-pointer font-medium tracking-wide">
            <span className="text-blue-500">📱</span> (11) 98813-3616
          </p>
        </motion.div>
      </div>
    </section>
  );
};
