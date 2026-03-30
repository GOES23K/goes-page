"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, type, colorFrom, colorTo, image }: { title: string, type: string, colorFrom: string, colorTo: string, image?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-[4/5] rounded-3xl p-6 flex flex-col justify-end group cursor-pointer border border-zinc-800 bg-zinc-900 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]`}
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ background: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})` }}
      />
      
      {/* Mockup visual representation */}
      <div 
        className="absolute inset-4 bottom-32 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl transition border border-zinc-700/50 flex flex-col"
        style={{ transform: "translateZ(50px)" }}
      >
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <>
             <div className="w-full h-8 bg-zinc-900/80 border-b border-zinc-700/50 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
             </div>
             <div className="flex-1 w-full flex flex-col p-4 gap-3 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)]">
                <div className="w-3/4 h-2 rounded bg-zinc-600/50"></div>
                <div className="w-1/2 h-2 rounded bg-zinc-600/50"></div>
                <div className="mt-auto w-full h-[60%] rounded-lg bg-zinc-700/30"></div>
             </div>
          </>
        )}
      </div>

      <div style={{ transform: "translateZ(70px)" }} className="relative z-10 w-full bg-zinc-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{type}</p>
        <Link href="#" className="inline-flex max-w-max items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
          Ver Projeto
        </Link>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section className="w-full py-24 md:py-32 px-4 bg-zinc-950" id="portfolio">
      <div className="max-w-7xl mx-auto flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center md:text-left"
        >
          Veja o que já construí
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-[1000px]">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once:true }}>
            <ProjectCard title="Lançamento Infoproduto" type="Landing Page de Alta Conversão" colorFrom="#3b82f6" colorTo="#8b5cf6" image="/images/infoprod_portfolio.png" />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once:true }}>
             <ProjectCard title="Clínica OdontoPremium" type="Site Institucional & Captura" colorFrom="#06b6d4" colorTo="#3b82f6" image="/images/dental_portfolio.png" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once:true }}>
             <ProjectCard title="Consultoria Tech" type="Página de Vendas (Venda Perpétua)" colorFrom="#8b5cf6" colorTo="#ec4899" image="/images/tech_portfolio.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
