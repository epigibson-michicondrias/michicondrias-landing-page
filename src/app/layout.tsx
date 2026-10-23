import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-mg",
  display: "swap",
});

const description =
  "Adopciones, carnet digital, veterinarios, tienda, Michi-IA y ayuda si se pierde. Toda la vida de tu mascota en una sola app, con los gatos al frente.";

export const metadata: Metadata = {
  metadataBase: new URL("https://michicondrias-landing-page.vercel.app"),
  title: "Michicondrias · Toda la vida de tu mascota, en un solo lugar",
  description,
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Michicondrias",
    description,
    images: [{ url: "/landing/hero.webp", width: 2400, height: 1340 }],
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e17",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
