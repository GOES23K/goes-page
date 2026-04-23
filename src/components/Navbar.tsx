"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useSpring } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#preco", label: "Preço" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    if (mobileOpen) return;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 z-[60] shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        aria-hidden="true"
      />

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-110%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center mt-4 px-4"
        aria-label="Navegação principal"
      >
        <div
          className={`w-full max-w-5xl flex items-center justify-between rounded-full border px-5 md:px-6 py-3 md:py-4 backdrop-blur-xl transition-[background,border,box-shadow] duration-300 ${
            scrolled
              ? "border-white/15 bg-black/70 shadow-[0_8px_30px_rgb(0,0,0,0.35)]"
              : "border-white/10 bg-black/40 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(25,28,33,0.08)]"
          }`}
        >
          <Link
            href="/"
            className="text-xl font-bold font-display text-white tracking-tight rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            goes<span className="text-[#3b82f6]">.page</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page"
            target="_blank"
            rel="noreferrer"
            className="relative hidden md:inline-flex h-10 overflow-hidden rounded-full p-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-safe:hover:scale-[1.02] transition-transform"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#06b6d4_50%,#3b82f6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Quero Minha Landing Page
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="absolute block h-[2px] w-5 bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute block h-[2px] w-5 bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.25 }}
              className="absolute block h-[2px] w-5 bg-white rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 inset-x-4 z-50 rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl p-6 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-zinc-200 hover:bg-white/5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <span>{l.label}</span>
                      <span className="text-zinc-600">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block w-full rounded-2xl bg-blue-600 hover:bg-blue-500 text-center text-white font-semibold px-6 py-4 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Quero Minha Landing Page
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
