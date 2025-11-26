import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactCompiler: true,
  images: {
    domains: ["s3.berlstore.com"],
  },
};

export default nextConfig;
