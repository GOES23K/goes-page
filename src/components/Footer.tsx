import Link from "next/link";
import { Mail, Phone, Globe, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-zinc-900 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between mb-12 gap-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold font-display text-white tracking-tight mb-4">
            goes<span className="text-[#3b82f6]">.page</span>
          </Link>
          <p className="text-zinc-500 text-sm max-w-[200px] text-center md:text-left">
            Design premium cinematográfico focado em conversão.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 md:gap-12 text-sm font-medium text-zinc-400 font-display">
          <Link href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</Link>
          <Link href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</Link>
          <Link href="#preco" className="hover:text-blue-400 transition-colors">Preço</Link>
          <Link href="#contato" className="hover:text-blue-400 transition-colors">Contato</Link>
        </div>

        {/* Social - Placeholders */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all">
            <Mail size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all">
            <Phone size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all">
            <Star size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all">
             <Globe size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex items-center justify-center text-zinc-600 text-sm">
        © 2026 goes.page. Todos os direitos reservados.
      </div>
    </footer>
  );
};
