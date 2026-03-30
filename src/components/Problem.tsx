"use client";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";

export const Problem = () => {
  const painPoints = [
    "Design genérico que não se diferencia da concorrência",
    "Página lenta que faz o visitante desistir",
    "Sem estratégia de conversão — visitantes entram e saem sem agir",
    "Não funciona bem no celular"
  ];

  return (
    <section className="w-full py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Pain Points */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col z-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
            Sua página atual está perdendo clientes?
          </h2>
          
          <div className="flex flex-col gap-6">
            {painPoints.map((pain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 bg-red-500/10 p-1 rounded-full text-red-500">
                  <XCircle size={24} />
                </div>
                <p className="text-lg md:text-xl text-zinc-400">
                  {pain}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual Card "ANTES" */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
           className="relative mx-auto w-full max-w-lg z-10"
        >
          <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full z-0" />
          
          <div className="relative z-10 bg-zinc-900 border border-red-500/30 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 transform transition-transform hover:scale-105 hover:rotate-0 hover:border-red-500/50 duration-500">
            {/* Stamp "ANTES" */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black text-xl px-6 py-2 rounded-full rotate-12 shadow-lg border-2 border-zinc-900 z-20">
              ANTES
            </div>
            
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800">
               <Image src="/images/bad_design.png" alt="Exemplo de site desatualizado" fill className="object-cover" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
