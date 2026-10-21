import Image from "next/image"
import Link from "next/link"
import { type Restaurant, fullAddress, mapsUrl, phoneHref } from "../lib/restaurants"
import { ArrowIcon, PhoneIcon, PinIcon } from "./Icons"
import OpenStatus from "./OpenStatus"

export default function RestaurantCard({ restaurant, headingLevel = "h3" }: { restaurant: Restaurant; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel
  const href = `/${restaurant.slug}`
  return (
    <article className="restaurant-card">
      <Link href={href} className="restaurant-card__media" tabIndex={-1} aria-hidden="true">
        <Image src={restaurant.photo} alt="" sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 33vw" placeholder="blur" />
        <span className="restaurant-card__area">{restaurant.area}</span>
      </Link>
      <div className="restaurant-card__body">
        <Heading>
          <Link href={href}>WoodZ {restaurant.name}</Link>
        </Heading>
        <p className="restaurant-card__address">
          <PinIcon /> {fullAddress(restaurant)}
        </p>
        <p className="restaurant-card__landmark">{restaurant.landmark}</p>
        <OpenStatus hours={restaurant.hours} className="restaurant-card__status" />
        <div className="restaurant-card__actions">
          <Link className="button button--red button--small" href={href}>
            Voir le restaurant <ArrowIcon />
          </Link>
          <a className="button button--outline button--small" href={phoneHref(restaurant)}>
            <PhoneIcon /> {restaurant.phoneDisplay}
          </a>
          <a className="text-link" href={mapsUrl(restaurant)} target="_blank" rel="noopener noreferrer">
            Itinéraire <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  )
}
