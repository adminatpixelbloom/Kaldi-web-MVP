import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com", // <-- wildcard for all Instagram CDNs
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.fna.fbcdn.net", // <-- wildcard for FB/Instagram fallback
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
