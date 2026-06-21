import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Callum Boaden | Web Design & Development — Sydney, Australia",
  description:
    "Boutique web design and full-stack development for ambitious brands. High-performance Next.js websites, UI/UX design, and digital strategy. Based in Australia, working globally.",
  keywords: [
    "web design Australia",
    "Next.js developer",
    "freelance web developer Sydney",
    "full stack developer",
    "UI UX design",
    "Vercel",
    "Tailwind CSS",
  ],
  authors: [{ name: "Callum Boaden", url: "https://callumboaden.com.au" }],
  creator: "Callum Boaden",
  metadataBase: new URL("https://callumboaden.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://callumboaden.com.au",
    siteName: "Callum Boaden Web Design & Development",
    title: "Callum Boaden | High-Performance Websites for Ambitious Brands",
    description:
      "Boutique web design and full-stack development for ambitious brands. Combining creative strategy with modern code.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callum Boaden | Web Design & Development",
    description:
      "Boutique web design and full-stack development for ambitious brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
