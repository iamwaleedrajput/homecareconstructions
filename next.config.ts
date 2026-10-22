import type { NextConfig } from "next";

function strapiImagePatterns() {
  const patterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
    { protocol: "http", hostname: "localhost", pathname: "/uploads/**" },
    { protocol: "http", hostname: "127.0.0.1", pathname: "/uploads/**" },
    { protocol: "https", hostname: "**.strapiapp.com", pathname: "/**" },
    { protocol: "https", hostname: "**.media.strapiapp.com", pathname: "/**" },
  ];

  const raw = process.env.STRAPI_URL?.trim();
  if (!raw) return patterns;

  try {
    const url = new URL(raw);
    patterns.push({
      protocol: url.protocol === "http:" ? "http" : "https",
      hostname: url.hostname,
      pathname: "/uploads/**",
    });
  } catch {
    return patterns;
  }

  return patterns;
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: strapiImagePatterns(),
  },
};

export default nextConfig;
