import Image from "next/image"
import Link from "next/link"
import { ArrowIcon, PinIcon } from "./components/Icons"
import Qualities from "./components/Qualities"
import RestaurantCard from "./components/RestaurantCard"
import Signatures from "./components/Signatures"
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"
import { RESTAURANTS } from "./lib/restaurants"
import { BRAND, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/site"
import plateau from "../public/images/plateau-woodz.jpg"
import sandwichLeWoodz from "../public/images/sandwich-le-woodz.jpg"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-woodz.png`,
  sameAs: [BRAND.instagram, BRAND.facebook],
  subOrganization: RESTAURANTS.map((r) => ({ "@type": "Restaurant", name: `WoodZ Kebab House ${r.name}`, url: `${SITE_URL}/${r.slug}` })),
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader
        links={[
          { href: "#restaurants", label: "Nos restaurants" },
          { href: "#signatures", label: "Nos signatures" },
          { href: "#concept", label: "Le concept" },
        ]}
      />

      <main id="contenu">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image className="hero__image" src={sandwichLeWoodz} alt="" fill preload sizes="100vw" placeholder="blur" />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">
              <PinIcon /> Illkirch · Sélestat · Colmar Houssen
            </p>
            <h1 id="hero-title">
              Un döner kebab unique. <span>Goûtez la différence&nbsp;!</span>
            </h1>
            <p className="hero__lead">
              Döner kebab 100&nbsp;% viande d’entrecôte pur bœuf artisanal, pain maison au sésame et à la nigelle, grand choix de crudités et de légumes grillés. Trois restaurants en Alsace.
            </p>
            <p className="hero__pick">Choisissez votre restaurant</p>
            <div className="hero__actions">
              {RESTAURANTS.map((restaurant, index) => (
                <Link key={restaurant.slug} className={`button ${index === 0 ? "button--red" : "button--ghost"}`} href={`/${restaurant.slug}`}>
                  <PinIcon /> {restaurant.shortName}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell restaurants" id="restaurants" aria-labelledby="restaurants-title">
          <div className="section-head">
            <p className="kicker">Sur place ou à emporter</p>
            <h2 id="restaurants-title">Nos restaurants</h2>
            <p className="section-head__lead">La même carte, la même qualité. Trouvez le WoodZ le plus proche, consultez ses horaires et commandez par téléphone.</p>
          </div>
          <div className="restaurants-grid">
            {RESTAURANTS.map((restaurant) => (
              <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
            ))}
          </div>
        </section>

        <Qualities />
        <Signatures />

        <section className="concept-band" id="concept" aria-labelledby="concept-title">
          <div className="section-shell concept">
            <div className="concept__media">
              <Image src={plateau} alt="Plateau WoodZ : sandwich, frites et boisson devant le chalet en bois" sizes="(max-width: 1000px) 100vw, 50vw" placeholder="blur" />
            </div>
            <div className="concept__text">
              <p className="kicker">Notre concept</p>
              <h2 id="concept-title">Nos kebabs sont uniques</h2>
              <p>
                Découvrez nos broches 100&nbsp;% viande d’entrecôte pur bœuf artisanales, des légumes frais préparés chaque jour et généreusement servis, et notre pain artisanal aux
                graines de sésame et de nigelle. Nos frites sont croustillantes et assaisonnées au paprika.
              </p>
              <p>Il est grand temps de réhabiliter ce mets délicieux, gourmand et bien plus sain qu’on ne le pense&nbsp;!</p>
              <p className="concept__family">WoodZ Kebab House est une entreprise familiale, née en Alsace.</p>
              <Link className="text-link" href="#restaurants">
                Trouver mon restaurant <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
