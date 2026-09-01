/** @type {import('next').NextConfig} */

// The site is fully static with no user input, no auth and no API routes.
// Next injects inline bootstrap scripts and we emit inline JSON-LD, and a
// nonce would force every page out of static generation — so script-src keeps
// 'unsafe-inline'. The value here is in pinning *origins*: nothing may load or
// exfiltrate to a host we did not list.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

// Courses that are announced but not built yet. They were live links into a
// 404 for months, so search engines and bookmarks still point at them. A
// temporary redirect keeps those visitors on the site and tells crawlers the
// URL is expected to come back, rather than serving a dead end.
const UNBUILT_COURSES = ['memecoin-trading'];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return UNBUILT_COURSES.map((slug) => ({
      source: `/courses/${slug}`,
      destination: '/',
      permanent: false,
    }));
  },
};

module.exports = nextConfig;
