import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-zinc-900 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between mb-12 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="text-2xl font-bold font-display text-white tracking-tight mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            goes<span className="text-[#3b82f6]">.page</span>
          </Link>
          <p className="text-zinc-500 text-sm max-w-[220px] text-center md:text-left leading-relaxed">
            Design premium cinematográfico focado em conversão.
          </p>
        </div>

        {/* Links */}
        <nav
          aria-label="Navegação no rodapé"
          className="flex items-center gap-8 md:gap-12 text-sm font-medium text-zinc-400 font-display"
        >
          <Link href="#servicos" className="hover:text-blue-400 transition-colors">
            Serviços
          </Link>
          <Link href="#portfolio" className="hover:text-blue-400 transition-colors">
            Portfólio
          </Link>
          <Link href="#preco" className="hover:text-blue-400 transition-colors">
            Preço
          </Link>
          <Link href="#contato" className="hover:text-blue-400 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Contact */}
        <div className="flex gap-3">
          <a
            href="mailto:contato@goes.page"
            aria-label="Enviar email"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+5511988133616"
            aria-label="Ligar para (11) 98813-3616"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://wa.me/5511988133616?text=Olá!%20Quero%20uma%20landing%20page"
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-green-400 hover:border-green-500/30 hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="#"
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
        <span>© {year} goes.page — Todos os direitos reservados.</span>
        <span className="text-zinc-700">
          Feito com <span className="text-red-500">♥</span> em São Paulo
        </span>
      </div>
    </footer>
  );
};
