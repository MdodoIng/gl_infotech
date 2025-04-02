import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gl_infotech ",
  assetPrefix: "/gl_infotech",
};

export default nextConfig;
