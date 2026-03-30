"use client";
import { motion } from "framer-motion";
import { Sparkles, PenTool, Zap, Smartphone, Search, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Design Cinematográfico",
    description: "Visual de alto impacto com animações suaves e efeitos que hipnotizam seu visitante.",
    icon: <Sparkles className="text-blue-400" size={24} />,
    size: "large", // col-span-2 md:col-span-2 lg:col-span-2
  },
  {
    title: "Copy que Converte",
    description: "Textos estratégicos que guiam o visitante até a ação. Cada palavra é pensada pra vender.",
    icon: <PenTool className="text-purple-400" size={24} />,
    size: "large",
  },
  {
    title: "Velocidade Absurda",
    description: "Nota 95+ no PageSpeed. Sua página carrega em menos de 2 segundos.",
    icon: <Zap className="text-yellow-400" size={24} />,
    size: "small", // col-span-1
  },
  {
    title: "Mobile First",
    description: "100% responsiva. Perfeita no celular, tablet e desktop.",
    icon: <Smartphone className="text-cyan-400" size={24} />,
    size: "small",
  },
  {
    title: "SEO Otimizado",
    description: "Estrutura técnica que o Google ama. Apareça nas buscas sem pagar anúncio.",
    icon: <Search className="text-green-400" size={24} />,
    size: "small",
  },
  {
    title: "Entrega em 5 Dias",
    description: "Do briefing ao site no ar em até 5 dias úteis.",
    icon: <CalendarCheck className="text-red-400" size={24} />,
    size: "small",
  }
];

export const Solution = () => {
  return (
    <section className="w-full py-24 px-4 bg-black relative" id="servicos">
      <div className="absolute inset-0 bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          O que você recebe com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">goes.page</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:-translate-y-1 flex flex-col justify-between",
                feature.size === "large" ? "lg:col-span-2 md:col-span-2" : "col-span-1"
              )}
            >
              {/* Glow element on hover */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/5 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
