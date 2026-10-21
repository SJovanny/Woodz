import Image from "next/image"
import badgeHalal from "../../public/images/badge-halal.png"
import badgeQualite from "../../public/images/badge-qualite.png"
import { MENU, SAUCES, formatPrice } from "../lib/menu"
import { ArrowIcon } from "./Icons"

export default function MenuBoard() {
  return (
    <section className="menu-section" id="carte" aria-labelledby="carte-title">
      <div className="section-shell">
        <div className="section-head">
          <p className="kicker">Carte 2025</p>
          <h2 id="carte-title">La carte</h2>
          <p className="section-head__lead">La même carte dans nos trois restaurants. Tous nos sandwichs sont servis dans notre pain artisanal, avec deux sauces au choix.</p>
        </div>
        <nav className="menu-chips" aria-label="Rubriques de la carte">
          {MENU.map(({ id, title }) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
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
                {items.map(({ name, price, description, note, veggie, image }) => (
                  <li key={name} className={image ? "menu-list__item menu-list__item--image" : "menu-list__item"}>
                    {image && <Image className="menu-list__thumb" src={image} alt="" sizes="(max-width: 760px) 96px, 128px" />}
                    <div>
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
                    </div>
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
  )
}
