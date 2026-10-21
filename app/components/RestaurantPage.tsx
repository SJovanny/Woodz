import type { Metadata } from "next"
import Image from "next/image"
import { type Restaurant, RESTAURANTS, fullAddress, getRestaurant, mapsUrl, phoneHref } from "../lib/restaurants"
import { BRAND, SITE_URL } from "../lib/site"
import HoursTable from "./HoursTable"
import { ArrowIcon, ClockIcon, MenuIcon, PhoneIcon, PinIcon } from "./Icons"
import MenuBoard from "./MenuBoard"
import OpenStatus from "./OpenStatus"
import Qualities from "./Qualities"
import RestaurantCard from "./RestaurantCard"
import RestaurantSwitcher from "./RestaurantSwitcher"
import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

export function restaurantMetadata(slug: string): Metadata {
  const restaurant = getRestaurant(slug)
  return {
    title: restaurant.seoTitle,
    description: restaurant.seoDescription,
    alternates: { canonical: `/${restaurant.slug}` },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: `/${restaurant.slug}`,
      title: `WoodZ Kebab House ${restaurant.name}`,
      description: restaurant.seoDescription,
      images: [{ url: restaurant.heroImage.src, width: restaurant.heroImage.width, height: restaurant.heroImage.height }],
    },
  }
}

const DAYS_SCHEMA = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const pad = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`

function restaurantJsonLd(restaurant: Restaurant) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `WoodZ Kebab House ${restaurant.name}`,
    description: restaurant.seoDescription,
    url: `${SITE_URL}/${restaurant.slug}`,
    image: `${SITE_URL}${restaurant.photo.src}`,
    telephone: restaurant.phoneE164,
    servesCuisine: ["Döner kebab", "Turque", "Restauration rapide"],
    priceRange: "€",
    address: { "@type": "PostalAddress", streetAddress: restaurant.street.replace("’", "'"), postalCode: restaurant.postalCode, addressLocality: restaurant.city, addressCountry: "FR" },
    hasMap: mapsUrl(restaurant),
    sameAs: [BRAND.instagram, BRAND.facebook],
    openingHoursSpecification: restaurant.hours.flatMap(({ slots }, index) =>
      slots.map(([open, close]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: DAYS_SCHEMA[index], opens: pad(open), closes: pad(close) })),
    ),
  }
}

export default function RestaurantPage({ slug }: { slug: string }) {
  const restaurant = getRestaurant(slug)
  const others = RESTAURANTS.filter((r) => r.slug !== slug)
  const tel = phoneHref(restaurant)
  const maps = mapsUrl(restaurant)

  return (
    // One root element: on navigation Next scrolls to the page's first visible top-level node, and sibling roots made it land on the footer.
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd(restaurant)).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader
        links={[
          { href: "#carte", label: "La carte" },
          { href: "#infos", label: "Infos & horaires" },
          { href: "/#restaurants", label: "Nos restaurants" },
        ]}
        phone={{ display: restaurant.phoneDisplay, href: tel }}
      />

      <main id="contenu">
        <section className="hero hero--restaurant" id="top" aria-labelledby="hero-title">
          <Image className="hero__image" src={restaurant.heroImage} alt="" fill preload sizes="100vw" placeholder="blur" />
          <div className="hero__shade" />
          <div className="hero__content">
            <RestaurantSwitcher current={restaurant.slug} />
            <p className="eyebrow">
              <PinIcon /> {fullAddress(restaurant)}
            </p>
            <h1 id="hero-title">
              WoodZ Kebab House <span>{restaurant.name}</span>
            </h1>
            <p className="hero__lead">
              Un döner kebab unique&nbsp;: 100&nbsp;% viande d’entrecôte pur bœuf artisanal, pain maison au sésame et à la nigelle, grand choix de crudités et de légumes grillés. {restaurant.landmark}.
            </p>
            <OpenStatus hours={restaurant.hours} className="hero__status" />
            <div className="hero__actions">
              <a className="button button--red" href="#carte">
                <MenuIcon /> Voir la carte
              </a>
              <a className="button button--ghost" href={tel}>
                <PhoneIcon /> Appeler
              </a>
              <a className="button button--ghost" href={maps} target="_blank" rel="noopener noreferrer">
                <PinIcon /> Itinéraire
              </a>
            </div>
            <ul className="hero__tags" aria-label="Services">
              <li>Sur place</li>
              <li>À emporter</li>
              <li>Viande halal</li>
            </ul>
          </div>
        </section>

        <Qualities />
        <MenuBoard />

        <section className="infos" id="infos" aria-labelledby="infos-title">
          <div className="section-shell infos__grid">
            <div className="infos__media">
              <Image src={restaurant.photo} alt={restaurant.photoAlt} sizes="(max-width: 1000px) 100vw, 45vw" placeholder="blur" />
            </div>
            <div className="infos__details">
              <p className="kicker">Nous trouver</p>
              <h2 id="infos-title">WoodZ {restaurant.shortName}</h2>
              <ul className="contact-list">
                <li>
                  <PinIcon />
                  <div>
                    <strong>{fullAddress(restaurant)}</strong>
                    <span>{restaurant.landmark}</span>
                    <a className="text-link" href={maps} target="_blank" rel="noopener noreferrer">
                      Itinéraire Google Maps <ArrowIcon />
                    </a>
                  </div>
                </li>
                <li>
                  <PhoneIcon />
                  <div>
                    <a className="contact-list__phone" href={tel}>
                      {restaurant.phoneDisplay}
                    </a>
                    <span>Commandez par téléphone, c’est prêt à votre arrivée.</span>
                  </div>
                </li>
                <li>
                  <ClockIcon />
                  <div>
                    <strong>Horaires</strong>
                    <OpenStatus hours={restaurant.hours} />
                  </div>
                </li>
              </ul>
              <HoursTable hours={restaurant.hours} />
            </div>
          </div>
        </section>

        <section className="section-shell others" aria-labelledby="others-title">
          <div className="section-head">
            <p className="kicker">La famille WoodZ</p>
            <h2 id="others-title">Nos autres restaurants</h2>
          </div>
          <div className="restaurants-grid restaurants-grid--two">
            {others.map((other) => (
              <RestaurantCard key={other.slug} restaurant={other} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />

      <nav className="action-bar" aria-label="Actions rapides">
        <a href={tel}>
          <PhoneIcon /> Appeler
        </a>
        <a href={maps} target="_blank" rel="noopener noreferrer">
          <PinIcon /> Itinéraire
        </a>
        <a href="#carte">
          <MenuIcon /> La carte
        </a>
      </nav>
    </div>
  )
}
