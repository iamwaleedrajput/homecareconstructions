import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    localPatterns: [{ pathname: "/**" }, { pathname: "/_next/static/media/**" }],
  },
  turbopack: {
    root: path.resolve(dirname),
  },
};

export default nextConfig;
