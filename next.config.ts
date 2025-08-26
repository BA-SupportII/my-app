import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for 6 months (adjust preload/use behind HTTPS only)
  { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains; preload" },
  // Clickjacking protection
  { key: "X-Frame-Options", value: "DENY" },
  // Basic XSS/ MIME protections
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions Policy (tighten as needed)
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
] as const;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders as unknown as { key: string; value: string }[],
      },
    ];
  },
};

export default nextConfig;
