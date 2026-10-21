import type { NextConfig } from "next"

// No script-src policy: it would need per-request nonces. These directives need none and already stop framing (clickjacking),
// plugins, injected <base> tags and foreign form targets.
const securityHeaders = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), payment=(), geolocation=()" },
]

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  headers: async () => [{ source: "/:path*", headers: securityHeaders }],
}

export default nextConfig
