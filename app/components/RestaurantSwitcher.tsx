import Link from "next/link"
import { RESTAURANTS } from "../lib/restaurants"

// Segmented control between restaurant pages: client-side navigation (prefetched), so switching swaps the content in place.
export default function RestaurantSwitcher({ current }: { current: string }) {
  return (
    <nav className="switcher" aria-label="Choisir un restaurant">
      {RESTAURANTS.map(({ slug, shortName }) => (
        <Link key={slug} href={`/${slug}`} className="switcher__option" aria-current={slug === current ? "page" : undefined}>
          {shortName}
        </Link>
      ))}
    </nav>
  )
}
