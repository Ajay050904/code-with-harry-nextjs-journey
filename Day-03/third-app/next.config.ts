import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.menucool.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
