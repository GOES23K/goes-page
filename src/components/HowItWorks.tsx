"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Briefing Rápido",
    desc: "Você me conta seu negócio, público e objetivo. 15 minutos no WhatsApp.",
    icon: <MessageCircle className="text-zinc-900" size={24} />
  },
  {
    num: "02",
    title: "Design + Desenvolvimento",
    desc: "Eu crio o design, escrevo a copy e codifico tudo com tecnologia de ponta.",
    icon: <Code2 className="text-zinc-900" size={24} />
  },
  {
    num: "03",
    title: "Revisão + Entrega",
    desc: "Você revisa, pede ajustes e recebe o site no ar.",
    icon: <Rocket className="text-zinc-900" size={24} />
  }
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full py-24 md:py-32 px-4 relative bg-black" id="como-funciona">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-20"
        >
          Simples assim: <span className="text-zinc-500">3 passos</span> pro seu site ficar pronto
        </motion.h2>

        <div className="relative pl-8 md:pl-0">
          {/* Tracing Timeline Line (Mobile/Desktop differs slightly) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[1px] md:-ml-px bg-zinc-800 hidden md:block" />
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }} 
            className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] md:-ml-[1px] bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] hidden md:block z-0" 
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10 w-full">
            {steps.map((step, idx) => (
               <div key={idx} className="relative w-full flex flex-col md:flex-row items-start md:items-center md:justify-between group">
                 {/* Mobile connector line */}
                 <div className="absolute left-[27px] top-12 bottom-[-4rem] w-[2px] bg-zinc-800 md:hidden last:hidden"></div>

                 {/* Left Text (Even indexes) / Right text (Odd indexes) alignment trick */}
                 <motion.div 
                   initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className={`w-full md:w-[45%] flex flex-col ${idx % 2 === 0 ? "md:text-right" : "md:order-3 md:text-left"} pl-20 md:pl-0`}
                 >
                   <span className="text-5xl md:text-6xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors">
                     {step.num}
                   </span>
                   <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                   <p className="text-zinc-400 text-lg">{step.desc}</p>
                 </motion.div>

                 {/* Center Element Icon */}
                 <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                   className={`absolute left-0 md:relative md:left-auto md:order-2 w-14 h-14 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10`}
                 >
                   {step.icon}
                 </motion.div>
                 
                 {/* Spacer to keep equal width */}
                 <div className={`hidden md:block w-[45%] ${idx % 2 === 0 ? "order-3" : "order-1"}`} />
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
