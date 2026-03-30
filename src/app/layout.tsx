import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "goes.page | Landing Pages de Alta Conversão",
  description: "Serviço premium de criação de landing pages cinematográficas e focadas em conversão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
