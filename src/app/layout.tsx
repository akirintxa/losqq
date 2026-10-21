import type { Metadata } from "next";
import { Stack_Sans_Notch, Urbanist } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const stackNotch = Stack_Sans_Notch({
  variable: "--font-stack-notch",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "losqq. Laboratorio de apps",
    template: "%s · losqq.",
  },
  description: "Apps personales que construyo para usar de verdad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${urbanist.variable} ${stackNotch.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-6xl px-6">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
