"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo demora pra ficar pronto?",
    a: "Em média 5 dias úteis após o briefing. Projetos simples podem ficar prontos em 3 dias."
  },
  {
    q: "Eu preciso fornecer os textos?",
    a: "Não! Eu escrevo toda a copy de vendas otimizada pra conversão. Você só precisa me contar sobre seu negócio."
  },
  {
    q: "A landing page fica em qual plataforma?",
    a: "Uso tecnologias modernas como Next.js e React, hospedadas na Vercel com domínio personalizado. Velocidade e performance máximas."
  },
  {
    q: "Posso pedir alterações depois?",
    a: "Sim! O pacote inclui 2 rodadas de revisão. Alterações adicionais têm um valor simbólico."
  },
  {
    q: "Vocês fazem sites completos também?",
    a: "O foco é landing pages de alta conversão. Para sites maiores, entre em contato para um orçamento personalizado."
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% na aprovação do briefing e 50% na entrega final. Aceito Pix e cartão."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 bg-zinc-950">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`w-full bg-zinc-900 border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-blue-500/40" : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleOpen(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset"
                >
                  <span className="font-bold text-lg md:text-xl text-zinc-100 pr-2">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 ${isOpen ? "text-blue-400" : "text-zinc-500"}`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
        <p className="mt-12 text-zinc-500 text-center">
          Ainda com dúvidas?{" "}
          <a href="https://wa.me/5511988133616" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4">
            Me chame no WhatsApp
          </a>
        </p>

      </div>
    </section>
  );
};
