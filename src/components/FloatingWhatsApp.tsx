"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page";

export const FloatingWhatsApp = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-end gap-3"
        >
          <AnimatePresence>
            {bubbleOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative mb-1 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl px-4 py-3 shadow-2xl max-w-xs"
              >
                <button
                  type="button"
                  aria-label="Fechar mensagem"
                  onClick={() => setBubbleOpen(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  ×
                </button>
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)] animate-pulse" />
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    Responde em minutos
                  </p>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Orçamento grátis no WhatsApp
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="group relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] hover:shadow-[0_10px_50px_-5px_rgba(37,211,102,0.9)] motion-safe:hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/50"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping opacity-30" aria-hidden="true" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="relative w-7 h-7 md:w-8 md:h-8 fill-white"
              aria-hidden="true"
            >
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.887 2.722.887.817 0 2.15-.515 2.48-1.29.202-.48.316-1.02.316-1.535 0-.214-1.69-.93-1.79-.93zm-2.924 7.277a9.48 9.48 0 0 1-5.52-1.763l-3.858 1.23 1.26-3.74a9.479 9.479 0 0 1-1.835-5.61c0-5.236 4.255-9.49 9.49-9.49s9.48 4.26 9.48 9.49-4.25 9.49-9.48 9.49z" />
              <path d="M16.187 2C9.355 2 3.798 7.557 3.798 14.39c0 2.345.655 4.59 1.898 6.536L3.14 28l7.23-2.35a12.397 12.397 0 0 0 5.817 1.475c6.835 0 12.392-5.557 12.392-12.39C28.578 7.557 23.02 2 16.187 2zm0 22.498a10.05 10.05 0 0 1-5.23-1.477l-.374-.221-3.872 1.26 1.26-3.77-.244-.388a10.013 10.013 0 0 1-1.535-5.352c0-5.545 4.51-10.057 10.057-10.057 5.545 0 10.057 4.512 10.057 10.057 0 5.544-4.512 10.047-10.057 10.047z" />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
