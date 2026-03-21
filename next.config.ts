import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-web-stg.ddverp.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-web-stg.ddverp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-v2.didongviet.vn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "giaphatbattery.com",
        pathname: "/**",
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
