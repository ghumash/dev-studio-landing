import type { Metadata } from "next";
import { Inter, Unbounded, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Разработка сайтов на заказ — современные лендинги и веб-проекты",
    template: "%s — Веб-студия",
  },
  description:
    "Создаю быстрые, современные сайты под ключ: лендинги, корпоративные сайты и интернет-магазины. Чистый код, адаптивный дизайн, SEO-оптимизация.",
  keywords: [
    "разработка сайтов",
    "создание лендинга",
    "заказать сайт",
    "веб-разработчик",
    "frontend разработка",
    "Next.js разработка",
  ],
  authors: [{ name: "Веб-студия" }],
  creator: "Веб-студия",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    title: "Разработка сайтов на заказ — современные лендинги и веб-проекты",
    description:
      "Создаю быстрые, современные сайты под ключ: лендинги, корпоративные сайты и интернет-магазины.",
    siteName: "Веб-студия",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Разработка сайтов на заказ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов на заказ",
    description:
      "Создаю быстрые, современные сайты под ключ: лендинги, корпоративные сайты и интернет-магазины.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Веб-студия",
  description:
    "Разработка современных сайтов: лендинги, корпоративные сайты, интернет-магазины.",
  url: siteUrl,
  areaServed: "RU",
  priceRange: "₽₽",
  serviceType: ["Веб-разработка", "Создание лендингов", "UI/UX дизайн"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
