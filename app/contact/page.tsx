import type { Metadata } from "next"
import ContactForm from "../components/ContactForm"
import HoursTable from "../components/HoursTable"
import { ArrowIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon } from "../components/Icons"
import OpenStatus from "../components/OpenStatus"
import SiteFooter from "../components/SiteFooter"
import SiteHeader from "../components/SiteHeader"
import { RESTAURANTS, fullAddress, mapsUrl, phoneHref } from "../lib/restaurants"
import { BRAND, LEGAL, SITE_NAME } from "../lib/site"

export const metadata: Metadata = {
  title: "Contact : téléphone, adresses et horaires",
  description: `Contactez ${SITE_NAME} : numéros de téléphone, adresses et horaires de nos restaurants d’Illkirch-Graffenstaden, Sélestat et Colmar Houssen.`,
  alternates: { canonical: "/contact" },
}

export default function Page() {
  return (
    <div className="page">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader links={[{ href: "/", label: "Accueil" }, { href: "/#restaurants", label: "Nos restaurants" }]} />
      <main id="contenu" className="section-shell contact">
        <div className="section-head">
          <p className="kicker">Une question, une commande ?</p>
          <h1>Contactez-nous</h1>
          <p className="section-head__lead">Pour commander, réserver ou poser une question, appelez directement le restaurant le plus proche : c’est le moyen le plus rapide.</p>
        </div>

        <div className="contact__grid">
          {RESTAURANTS.map((restaurant) => (
            <section key={restaurant.slug} className="contact-card" aria-labelledby={`contact-${restaurant.slug}`}>
              <h2 id={`contact-${restaurant.slug}`}>WoodZ {restaurant.name}</h2>
              <p className="contact-card__address">
                <PinIcon /> {fullAddress(restaurant)}
              </p>
              <OpenStatus hours={restaurant.hours} className="restaurant-card__status" />
              <HoursTable hours={restaurant.hours} />
              <div className="restaurant-card__actions">
                <a className="button button--red button--small" href={phoneHref(restaurant)}>
                  <PhoneIcon /> {restaurant.phoneDisplay}
                </a>
                <a className="text-link" href={mapsUrl(restaurant)} target="_blank" rel="noopener noreferrer">
                  Itinéraire <ArrowIcon />
                </a>
              </div>
            </section>
          ))}
        </div>

        <ContactForm />

        <div className="contact__more">
          <p>
            Une demande générale (partenariat, presse, recrutement) ? Écrivez-nous à <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
          </p>
          <div className="site-footer__social">
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Instagram">
              <InstagramIcon />
            </a>
            <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
