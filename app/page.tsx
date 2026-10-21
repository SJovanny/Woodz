import Image from "next/image"
import HoursTable from "./components/HoursTable"
import { ArrowIcon, ClockIcon, FacebookIcon, InstagramIcon, MenuIcon, PhoneIcon, PinIcon } from "./components/Icons"
import OpenStatus from "./components/OpenStatus"
import { MENU, SAUCES, formatPrice } from "./lib/menu"
import { OPENING_HOURS, OTHER_RESTAURANTS, RESTAURANT, SITE_DESCRIPTION, SITE_URL } from "./lib/site"
import badgeHalal from "../public/images/badge-halal.png"
import badgeQualite from "../public/images/badge-qualite.png"
import logo from "../public/images/logo-woodz.png"
import plateau from "../public/images/plateau-woodz.jpg"
import restaurantPhoto from "../public/images/restaurant-illkirch.jpg"
import sandwichAlaturka from "../public/images/sandwich-alaturka.jpg"
import sandwichDoner from "../public/images/sandwich-doner.jpg"
import sandwichLeWoodz from "../public/images/sandwich-le-woodz.jpg"

const QUALITIES = [
  { title: "Viande d’entrecôte", text: "100 % pur bœuf, broches artisanales" },
  { title: "Pain artisanal", text: "Aux graines de sésame et de nigelle" },
  { title: "Légumes frais", text: "Préparés chaque jour, servis généreusement" },
  { title: "Frites croustillantes", text: "Assaisonnées au paprika" },
]

// Each signature shows its sandwich and menu prices, read from the menu so they never drift apart.
const findPrice = (section: string, name: string) => MENU.find((s) => s.id === section)?.items.find((item) => item.name === name)?.price
const SIGNATURES = [
  { name: "Le Wood’Z", tag: "Notre spécialité", image: sandwichLeWoodz, alt: "Le Wood’Z : pain artisanal garni de viande d’entrecôte, aubergines grillées, feta, roquette et chou rouge", sandwich: findPrice("sandwichs", "Sandwich Wood’Z"), menu: findPrice("menus", "Le Wood’Z"), text: "Viande d’entrecôte, légumes grillés, crudités, feta, roquette et sauce." },
  { name: "Döner Simple", tag: "Le classique", image: sandwichDoner, alt: "Döner simple : viande d’entrecôte, tomates, salade, chou rouge et oignons rouges", sandwich: findPrice("sandwichs", "Sandwich Döner"), menu: findPrice("menus", "Döner Simple"), text: "Viande d’entrecôte, crudités et sauce. L’essentiel, bien fait." },
  { name: "Alaturka", tag: "Double viande", image: sandwichAlaturka, alt: "Alaturka : pain artisanal rempli de viande d’entrecôte et d’oignons grillés", sandwich: findPrice("sandwichs", "Sandwich Alaturka"), menu: findPrice("menus", "Alaturka"), text: "Viande d’entrecôte, supplément viande, oignons grillés et sauce." },
]

const DAYS_SCHEMA = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const pad = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${RESTAURANT.name} ${RESTAURANT.city}`,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/restaurant-illkirch.jpg`,
  telephone: RESTAURANT.phoneE164,
  servesCuisine: ["Döner kebab", "Turque", "Restauration rapide"],
  priceRange: "€",
  address: { "@type": "PostalAddress", streetAddress: "40 Rue de l'Industrie", postalCode: RESTAURANT.postalCode, addressLocality: RESTAURANT.city, addressCountry: "FR" },
  hasMap: RESTAURANT.mapsUrl,
  sameAs: [RESTAURANT.instagram, RESTAURANT.facebook],
  openingHoursSpecification: OPENING_HOURS.flatMap(({ slots }, index) =>
    slots.map(([open, close]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: DAYS_SCHEMA[index], opens: pad(open), closes: pad(close) })),
  ),
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#contenu">Aller au contenu</a>

      <header className="site-header">
        <a href="#top" className="site-header__logo" aria-label="WoodZ Kebab House Illkirch, retour en haut">
          <Image src={logo} alt="" width={150} height={61} preload />
        </a>
        <nav aria-label="Navigation principale" className="site-header__nav">
          <a href="#carte">La carte</a>
          <a href="#concept">Le concept</a>
          <a href="#infos">Infos & horaires</a>
        </nav>
        <a className="button button--red button--small" href={RESTAURANT.phoneHref}>
          <PhoneIcon /> <span>{RESTAURANT.phoneDisplay}</span>
        </a>
      </header>

      <main id="contenu">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image className="hero__image" src={sandwichLeWoodz} alt="" fill preload sizes="100vw" placeholder="blur" />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">
              <PinIcon /> Illkirch-Graffenstaden · Baggersee
            </p>
            <h1 id="hero-title">
              Un döner kebab unique. <span>Goûtez la différence&nbsp;!</span>
            </h1>
            <p className="hero__lead">
              Döner kebab 100&nbsp;% viande d’entrecôte pur bœuf artisanal, pain maison au sésame et à la nigelle, grand choix de crudités et de légumes grillés.
            </p>
            <OpenStatus className="hero__status" />
            <div className="hero__actions">
              <a className="button button--red" href="#carte">
                <MenuIcon /> Voir la carte
              </a>
              <a className="button button--ghost" href={RESTAURANT.phoneHref}>
                <PhoneIcon /> Appeler
              </a>
              <a className="button button--ghost" href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
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

        <section className="qualities" aria-labelledby="qualities-title">
          <h2 id="qualities-title" className="qualities__title">De la qualité <span>et rien d’autre</span></h2>
          <ul className="qualities__list">
            {QUALITIES.map(({ title, text }, index) => (
              <li key={title}>
                <span className="qualities__index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-shell signatures" aria-labelledby="signatures-title">
          <div className="section-head">
            <p className="kicker">Les incontournables</p>
            <h2 id="signatures-title">Nos signatures</h2>
          </div>
          <div className="signatures__grid">
            {SIGNATURES.map(({ name, tag, image, alt, sandwich, menu, text }) => (
              <article key={name} className="signature">
                <div className="signature__media">
                  <Image src={image} alt={alt} sizes="(max-width: 760px) 100vw, 33vw" placeholder="blur" />
                  <span className="signature__tag">{tag}</span>
                </div>
                <div className="signature__body">
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <dl className="signature__prices">
                    {sandwich !== undefined && (
                      <div>
                        <dt>Sandwich</dt>
                        <dd>{formatPrice(sandwich)}</dd>
                      </div>
                    )}
                    {menu !== undefined && (
                      <div>
                        <dt>Menu</dt>
                        <dd>{formatPrice(menu)}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="menu-section" id="carte" aria-labelledby="carte-title">
          <div className="section-shell">
            <div className="section-head">
              <p className="kicker">Carte 2025</p>
              <h2 id="carte-title">La carte</h2>
              <p className="section-head__lead">Tous nos sandwichs sont servis dans notre pain artisanal. Deux sauces au choix par sandwich.</p>
            </div>
            <nav className="menu-chips" aria-label="Rubriques de la carte">
              {MENU.map(({ id, title }) => (
                <a key={id} href={`#${id}`}>{title}</a>
              ))}
              <a href="#sauces">Sauces</a>
            </nav>
            <div className="menu-grid">
              {MENU.map(({ id, title, subtitle, items }) => (
                <section key={id} id={id} className={`menu-card menu-card--${id}`} aria-labelledby={`${id}-title`}>
                  <header className="menu-card__head">
                    <h3 id={`${id}-title`}>{title}</h3>
                    {subtitle && <p>{subtitle}</p>}
                  </header>
                  <ul className="menu-list">
                    {items.map(({ name, price, description, note, veggie }) => (
                      <li key={name}>
                        <div className="menu-list__line">
                          <span className="menu-list__name">
                            {name}
                            {veggie && <span className="pill pill--veggie">Veggie</span>}
                            {note && !description && <span className="pill">{note}</span>}
                          </span>
                          <span className="menu-list__dots" aria-hidden="true" />
                          <span className="menu-list__price">{formatPrice(price)}</span>
                        </div>
                        {description && (
                          <p className="menu-list__desc">
                            {description}
                            {note && <span className="pill">{note}</span>}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
              <section id="sauces" className="menu-card menu-card--sauces" aria-labelledby="sauces-title">
                <header className="menu-card__head">
                  <h3 id="sauces-title">Sauces au choix</h3>
                  <p>2 sauces par sandwich</p>
                </header>
                <ul className="sauces">
                  {SAUCES.map((sauce) => (
                    <li key={sauce}>{sauce}</li>
                  ))}
                </ul>
                <div className="badges">
                  <Image src={badgeQualite} alt="Viande de qualité : 100 % entrecôte" width={96} height={96} />
                  <Image src={badgeHalal} alt="Viande certifiée halal" width={96} height={96} />
                </div>
              </section>
            </div>
            <p className="menu-section__foot">
              <a className="text-link" href="/images/carte-woodz-2025.png" target="_blank" rel="noopener">
                Voir la carte originale en image <ArrowIcon />
              </a>
              <span>Prix TTC, susceptibles d’évoluer. Renseignez-vous en restaurant.</span>
            </p>
          </div>
        </section>

        <section className="section-shell concept" id="concept" aria-labelledby="concept-title">
          <div className="concept__media">
            <Image src={plateau} alt="Plateau WoodZ : sandwich, frites et boisson devant le chalet en bois" sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" />
          </div>
          <div className="concept__text">
            <p className="kicker">Notre concept</p>
            <h2 id="concept-title">Nos kebabs sont uniques</h2>
            <p>
              Découvrez nos broches 100&nbsp;% viande d’entrecôte pur bœuf artisanales, des légumes frais préparés chaque jour et généreusement servis, et notre pain artisanal aux graines de
              sésame et de nigelle. Nos frites sont croustillantes et assaisonnées au paprika.
            </p>
            <p>Il est grand temps de réhabiliter ce mets délicieux, gourmand et bien plus sain qu’on ne le pense&nbsp;!</p>
            <p className="concept__family">WoodZ Kebab House est une entreprise familiale, née en Alsace.</p>
          </div>
        </section>

        <section className="infos" id="infos" aria-labelledby="infos-title">
          <div className="section-shell infos__grid">
            <div className="infos__media">
              <Image src={restaurantPhoto} alt="Le chalet en bois WoodZ Kebab House, 40 rue de l’Industrie à Illkirch-Graffenstaden" sizes="(max-width: 900px) 100vw, 45vw" placeholder="blur" />
            </div>
            <div className="infos__details">
              <p className="kicker">Nous trouver</p>
              <h2 id="infos-title">WoodZ Illkirch</h2>
              <ul className="contact-list">
                <li>
                  <PinIcon />
                  <div>
                    <strong>
                      {RESTAURANT.street}, {RESTAURANT.postalCode} {RESTAURANT.city}
                    </strong>
                    <span>{RESTAURANT.landmark}</span>
                    <a className="text-link" href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Itinéraire Google Maps <ArrowIcon />
                    </a>
                  </div>
                </li>
                <li>
                  <PhoneIcon />
                  <div>
                    <a className="contact-list__phone" href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>
                    <span>Commandez par téléphone, c’est prêt à votre arrivée.</span>
                  </div>
                </li>
                <li>
                  <ClockIcon />
                  <div>
                    <strong>Horaires</strong>
                    <OpenStatus />
                  </div>
                </li>
              </ul>
              <HoursTable />
            </div>
          </div>
        </section>

        <section className="section-shell others" aria-labelledby="others-title">
          <div className="section-head">
            <p className="kicker">La famille WoodZ</p>
            <h2 id="others-title">Nos autres restaurants</h2>
          </div>
          <ul className="others__grid">
            {OTHER_RESTAURANTS.map(({ name, address, landmark, phoneDisplay, phoneHref, url }) => (
              <li key={name} className="other">
                <h3>WoodZ {name}</h3>
                <p>{address}</p>
                <p className="other__landmark">{landmark}</p>
                <div className="other__links">
                  <a href={phoneHref}>{phoneDisplay}</a>
                  <a className="text-link" href={url} target="_blank" rel="noopener">
                    Voir le restaurant <ArrowIcon />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__inner">
          <Image src={logo} alt="WoodZ Kebab House" width={180} height={73} />
          <div>
            <p>
              {RESTAURANT.street}, {RESTAURANT.postalCode} {RESTAURANT.city}
            </p>
            <p>
              <a href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>
            </p>
          </div>
          <div className="site-footer__social">
            <a href={RESTAURANT.instagram} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Instagram">
              <InstagramIcon />
            </a>
            <a href={RESTAURANT.facebook} target="_blank" rel="noopener noreferrer" aria-label="WoodZ Kebab House sur Facebook">
              <FacebookIcon />
            </a>
            <a className="text-link" href={RESTAURANT.officialSite} target="_blank" rel="noopener">
              woodz-kebab-house.fr <ArrowIcon />
            </a>
          </div>
        </div>
        <p className="site-footer__copy">© WoodZ Kebab House Illkirch-Graffenstaden</p>
      </footer>

      <nav className="action-bar" aria-label="Actions rapides">
        <a href={RESTAURANT.phoneHref}>
          <PhoneIcon /> Appeler
        </a>
        <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
          <PinIcon /> Itinéraire
        </a>
        <a href="#carte">
          <MenuIcon /> La carte
        </a>
      </nav>
    </>
  )
}
