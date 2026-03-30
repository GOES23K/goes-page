"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const Pricing = () => {
  const benefits = [
    "Design exclusivo e personalizado",
    "Copy persuasiva de vendas",
    "Animações e efeitos cinematográficos",
    "100% responsivo (mobile, tablet, desktop)",
    "Otimizado para SEO e velocidade",
    "Entrega em até 5 dias úteis",
    "2 rodadas de revisão incluídas",
    "Suporte por 30 dias após entrega"
  ];

  return (
    <section className="w-full py-24 md:py-32 px-4 bg-black relative" id="preco">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          Investimento
        </motion.h2>

        {/* Pricing Card Premium */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-lg w-full group rounded-[2rem] p-px overflow-hidden cursor-default"
        >
          {/* Animated gradient border pseudo-element using spin */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)] animate-[spin_3s_linear_infinite]" />
          
          <div className="relative bg-zinc-950/90 backdrop-blur-xl h-full w-full rounded-[2rem] p-8 md:p-10 flex flex-col items-center">
             
             {/* Badge */}
             <div className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
               Mais Popular
             </div>

             <div className="text-center mb-10 border-b border-zinc-800 pb-10 w-full">
                <span className="text-zinc-500 font-medium text-lg block mb-2">Por apenas</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl text-zinc-400 font-bold">R$</span>
                  <span className="text-6xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    350
                  </span>
                </div>
                <p className="text-zinc-400 mt-4 text-sm font-medium">
                  Pagamento único. Sem mensalidade.
                </p>
             </div>

             <div className="flex flex-col gap-4 w-full mb-10">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    key={idx} 
                    className="flex items-center gap-3"
                  >
                     <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                     <span className="text-zinc-300 text-[15px]">{benefit}</span>
                  </motion.div>
                ))}
             </div>

             <Link 
               href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page" target="_blank"
               className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.8)] text-lg hover:scale-[1.02]"
             >
               Quero Minha Landing Page &rarr;
             </Link>

             <p className="mt-6 text-zinc-500 text-sm flex items-center justify-center gap-2 mb-0">
                🔒 Satisfação garantida ou seu dinheiro de volta
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
