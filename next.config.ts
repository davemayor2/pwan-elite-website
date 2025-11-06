import type { NextConfig } from "next";

// Let Next.js serve files from /public with its default static file server.
// This preserves Range (206) responses needed for reliable video playback.
const nextConfig: NextConfig = {};

export default nextConfig;
