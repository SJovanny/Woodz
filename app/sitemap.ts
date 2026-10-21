import type { MetadataRoute } from "next"
import { RESTAURANTS } from "./lib/restaurants"
import { SITE_URL } from "./lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...RESTAURANTS.map((r) => ({ url: `${SITE_URL}/${r.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ]
}
