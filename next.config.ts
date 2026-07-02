import type { NextConfig } from "next";

const repo = "/vacation-countdown";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: `${repo}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
