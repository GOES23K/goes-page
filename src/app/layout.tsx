import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://goes.page";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "goes.page — Landing Pages de Alta Conversão",
    template: "%s | goes.page",
  },
  description:
    "Serviço premium de criação de landing pages cinematográficas e focadas em conversão. Design + copy + tecnologia de ponta, entrega em até 5 dias.",
  keywords: [
    "landing page",
    "alta conversão",
    "design cinematográfico",
    "next.js",
    "tailwind",
    "copywriting",
    "site personalizado",
    "desenvolvedor web",
  ],
  authors: [{ name: "goes.page" }],
  creator: "goes.page",
  applicationName: "goes.page",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "goes.page",
    title: "goes.page — Landing Pages de Alta Conversão",
    description:
      "Design cinematográfico + copy persuasiva + tecnologia de ponta. Landing pages que convertem.",
    images: [
      {
        url: "/images/infoprod_portfolio.png",
        width: 1200,
        height: 630,
        alt: "Exemplo de landing page criada pela goes.page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "goes.page — Landing Pages de Alta Conversão",
    description:
      "Design cinematográfico + copy persuasiva + tecnologia de ponta.",
    images: ["/images/infoprod_portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "goes.page",
  description:
    "Criação de landing pages cinematográficas de alta conversão.",
  url: SITE_URL,
  image: `${SITE_URL}/images/infoprod_portfolio.png`,
  telephone: "+55-11-98813-3616",
  priceRange: "R$350+",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  areaServed: "BR",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2338523286635488');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
