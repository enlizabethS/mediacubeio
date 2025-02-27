/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Нужно для Cloudflare Pages
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true, // Cloudflare не поддерживает next/image
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig; // Используем ES-модуль вместо CommonJS
