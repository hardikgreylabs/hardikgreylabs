import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // Remove basePath and assetPrefix for cleaner structure
  // Will add if repository name needs to be in path
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
