import type { NextConfig } from "next";

// If your site is served from a subdirectory (e.g. hostinger subdomain folder or domain.com/site),
// set NEXT_PUBLIC_BASE_PATH to that path (e.g. "/site") and rebuild. All assets and links will be prefixed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath ? basePath : undefined,
  assetPrefix: basePath ? basePath : undefined,
  trailingSlash: true,
};

export default nextConfig;
