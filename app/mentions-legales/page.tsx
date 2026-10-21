import type { Metadata } from "next"
import LegalPage from "../components/LegalPage"
import { RESTAURANTS, fullAddress } from "../lib/restaurants"
import { LEGAL } from "../lib/site"

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
}

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        {LEGAL.company} ({LEGAL.legalForm}), exploitant les restaurants WoodZ Kebab House.
        <br />
        SIRET : {LEGAL.siret}
        <br />
        TVA : {LEGAL.vat}
        <br />
        Siège social : {LEGAL.address}
        <br />
        Contact : {LEGAL.email}
      </p>
      <p>Directeur de la publication : {LEGAL.publisher}.</p>

      <h2>Restaurants</h2>
      <ul>
        {RESTAURANTS.map((r) => (
          <li key={r.slug}>
            WoodZ {r.name} : {fullAddress(r)}, {r.phoneDisplay}
          </li>
        ))}
      </ul>

      <h2>Conception du site</h2>
      <p>{LEGAL.designer}.</p>

      <h2>Hébergement</h2>
      <p>{LEGAL.host}.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le nom, le logo, les photographies et les textes présentés sur ce site appartiennent à leurs titulaires. Toute reproduction ou réutilisation sans autorisation écrite est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les horaires, prix et informations de la carte sont donnés à titre indicatif et peuvent évoluer. Pour une information à jour, contactez directement le restaurant concerné. Les liens vers des sites tiers (Instagram, Facebook, cartographie) n’engagent pas la responsabilité de l’éditeur.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Voir notre <a href="/confidentialite">politique de confidentialité</a>.
      </p>
    </LegalPage>
  )
}
