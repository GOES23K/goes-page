"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Minha taxa de conversão triplicou depois da landing page. Investimento que se pagou no primeiro mês. O design elevou muito a percepção da minha marca.",
    name: "Ana Silveira",
    role: "E-commerce Founder",
    initials: "AS",
  },
  {
    quote: "Entregou antes do prazo e o design ficou absurdo. Todos os meus leads elogiam o visual. Definitivamente o melhor profissional de web que já contratei.",
    name: "Lucas Martins",
    role: "Consultor de Negócios",
    initials: "LM",
  },
  {
    quote: "Profissionalismo de outro nível. Parece que contratei uma agência grande pagando 10x mais. A página carrega instantaneamente no celular.",
    name: "Mariana Rocha",
    role: "Nutricionista Clínica",
    initials: "MR",
  },
  {
    quote: "A página ficou tão boa que meus concorrentes perguntaram quem fez. O tráfego pago tá gerando muito mais resultados agora que a casa tá arrumada.",
    name: "Pedro Henrique",
    role: "Personal Trainer Mestre",
    initials: "PH",
  }
];

export const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white"
        >
          O que meus clientes dizem
        </motion.h2>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
        <div className="flex shrink-0 animate-marquee-slow gap-6 px-3">
          {testimonials.map((item, idx) => (
             <div key={idx} className="w-[350px] md:w-[450px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shrink-0 hover:border-blue-500/30 transition-colors cursor-grab">
                
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {/* Estrelas */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-1">
                  &quot;{item.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold font-display">{item.name}</span>
                    <span className="text-zinc-500 text-sm">{item.role}</span>
                  </div>
                </div>
             </div>
          ))}
        </div>
        
        {/* Clone para continuar infinito fluidamente */}
        <div className="flex shrink-0 animate-marquee-slow gap-6 px-3" aria-hidden="true">
          {testimonials.map((item, idx) => (
             <div key={`clone-${idx}`} className="w-[350px] md:w-[450px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shrink-0 hover:border-blue-500/30 transition-colors cursor-grab">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`clone-star-${i}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-1">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-inner">
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold font-display">{item.name}</span>
                    <span className="text-zinc-500 text-sm">{item.role}</span>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
