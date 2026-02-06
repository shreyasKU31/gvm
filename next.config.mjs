/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;
              frame-src 'self' https://www.google.com https://www.youtube.com;
              media-src 'self';
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Compression
  compress: true,

  // Power by header removal
  poweredByHeader: false,

  // Strict mode for React
  reactStrictMode: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
