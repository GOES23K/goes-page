"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center mt-4 px-4"
    >
      <div className="w-full max-w-5xl flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <Link href="/" className="text-xl font-bold font-display text-white tracking-tight">
          goes<span className="text-[#3b82f6]">.page</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">Portfólio</Link>
          <Link href="#preco" className="hover:text-white transition-colors">Preço</Link>
          <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
        </div>

        {/* CTA */}
        <Link href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page" target="_blank" className="relative hidden md:inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#06b6d4_50%,#3b82f6_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-transform hover:scale-[0.98]">
            Quero Minha Landing Page
          </span>
        </Link>
        
        {/* Mobile menu toggle (placeholder for now) */}
        <div className="md:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </motion.nav>
  );
};
