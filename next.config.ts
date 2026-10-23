import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    // La landing vive sola: si la URL de la web app queda vacía, «Entrar» y «Crear cuenta» bajan a la sección de la app.
    NEXT_PUBLIC_LANDING_STANDALONE: "1",
    // Web app (frontend/ del monorepo, proyecto «michicondrias» en Vercel): «Entrar» y «Crear cuenta» llevan ahí.
    NEXT_PUBLIC_WEB_APP_URL: process.env.NEXT_PUBLIC_WEB_APP_URL ?? "https://michicondrias.vercel.app",
  },
};

export default nextConfig;
