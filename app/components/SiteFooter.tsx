import Image from "next/image"
import Link from "next/link"
import logo from "../../public/images/logo-woodz.png"
import { RESTAURANTS, fullAddress, phoneHref } from "../lib/restaurants"
import { BRAND } from "../lib/site"
import { FacebookIcon, InstagramIcon } from "./Icons"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div className="site-footer__brand">
          <Image src={logo} alt="WoodZ Kebab House" width={180} height={73} />
          <p>Döner kebab 100&nbsp;% viande d’entrecôte pur bœuf. Entreprise familiale alsacienne.</p>
          <div className="site-footer__social">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Instagram">
              <InstagramIcon />
            </a>
            <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <ul className="site-footer__restaurants">
          {RESTAURANTS.map((restaurant) => (
            <li key={restaurant.slug}>
              <Link href={`/${restaurant.slug}`}>WoodZ {restaurant.name}</Link>
              <p>{fullAddress(restaurant)}</p>
              <a href={phoneHref(restaurant)}>{restaurant.phoneDisplay}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="site-footer__copy">
        © WoodZ Kebab House · <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/confidentialite">Confidentialité</Link>
      </p>
    </footer>
  )
}
