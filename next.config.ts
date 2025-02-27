/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
