import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="page">
      <SiteHeader links={[{ href: "/", label: "Accueil" }]} />
      <main id="contenu" className="section-shell legal">
        <h1>{title}</h1>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
