import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    // La landing vive sola: sin web app publicada, «Entrar» y «Crear cuenta» bajan a la sección de la app.
    NEXT_PUBLIC_LANDING_STANDALONE: "1",
    // URL de la web app (frontend/ del monorepo). Al publicarla, ponla aquí o en las variables de Vercel.
    NEXT_PUBLIC_WEB_APP_URL: process.env.NEXT_PUBLIC_WEB_APP_URL ?? "",
  },
};

export default nextConfig;
