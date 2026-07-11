import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder project imagery is authored as local SVGs (see public/images/placeholders).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
