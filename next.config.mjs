/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: "/pokedex-front",
  env: {
    SERVER_URL: process.env.SERVER_URL,
    ENVIRONNEMENT: process.env.ENVIRONNEMENT,
  },
};

export default nextConfig;
