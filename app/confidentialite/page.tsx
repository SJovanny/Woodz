import type { Metadata } from "next"
import LegalPage from "../components/LegalPage"
import { LEGAL } from "../lib/site"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false },
}

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Données collectées</h2>
      <p>
        Ce site est un site vitrine : il ne propose ni compte client, ni formulaire, ni commande en ligne, et ne collecte aucune donnée personnelle de manière volontaire.
      </p>

      <h2>Cookies et mesure d’audience</h2>
      <p>
        Le site n’utilise ni cookie publicitaire, ni outil de mesure d’audience, ni traceur tiers. Aucun bandeau de consentement n’est donc nécessaire. L’heure d’ouverture affichée est calculée sur votre appareil et n’est pas transmise.
      </p>

      <h2>Données techniques</h2>
      <p>
        Comme tout site web, l’hébergeur peut enregistrer des journaux techniques (adresse IP, date, page demandée) pour assurer la sécurité et le bon fonctionnement du service, pour une durée limitée.
      </p>

      <h2>Liens externes</h2>
      <p>
        Les boutons d’appel, d’itinéraire et de réseaux sociaux vous mènent vers des services tiers (téléphone, cartographie, Instagram, Facebook), soumis à leurs propres politiques de confidentialité.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour toute question : {LEGAL.email}. Vous pouvez aussi saisir la CNIL (cnil.fr).
      </p>
    </LegalPage>
  )
}
