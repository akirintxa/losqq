import type { NextConfig } from "next";

const QUINIELA_URL = "https://quiniela.losqq.com";

// Rutas que la quiniela servía en losqq.com antes de mudarse a su subdominio.
// Se redirigen para que los QR e invitaciones ya compartidos sigan funcionando.
const QUINIELA_PATHS = [
  "/login",
  "/forgot-password",
  "/update-password",
  "/dashboard",
  "/groups/:path*",
  "/pool/:path*",
  "/join/:path*",
  "/ranking",
  "/profile",
  "/admin/:path*",
  "/auth/:path*",
  "/api/:path*",
];

const nextConfig: NextConfig = {
  async redirects() {
    return QUINIELA_PATHS.map((source) => ({
      source,
      destination: `${QUINIELA_URL}${source.replace(/\/:path\*$/, "/:path*")}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
