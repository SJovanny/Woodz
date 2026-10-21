import Image from "next/image"
import sandwichAlaturka from "../../public/images/sandwich-alaturka.jpg"
import sandwichDoner from "../../public/images/sandwich-doner.jpg"
import sandwichLeWoodz from "../../public/images/sandwich-le-woodz.jpg"
import { MENU, formatPrice } from "../lib/menu"

// Each signature shows its sandwich and menu prices, read from the menu so they never drift apart.
const findPrice = (section: string, name: string) => MENU.find((s) => s.id === section)?.items.find((item) => item.name === name)?.price
const SIGNATURES = [
  { name: "Le Wood’Z", tag: "Notre spécialité", image: sandwichLeWoodz, alt: "Le Wood’Z : pain artisanal garni de viande d’entrecôte, aubergines grillées, feta, roquette et chou rouge", sandwich: findPrice("sandwichs", "Sandwich Wood’Z"), menu: findPrice("menus", "Le Wood’Z"), text: "Viande d’entrecôte, légumes grillés, crudités, feta, roquette et sauce." },
  { name: "Döner Simple", tag: "Le classique", image: sandwichDoner, alt: "Döner simple : viande d’entrecôte, tomates, salade, chou rouge et oignons rouges", sandwich: findPrice("sandwichs", "Sandwich Döner"), menu: findPrice("menus", "Döner Simple"), text: "Viande d’entrecôte, crudités et sauce. L’essentiel, bien fait." },
  { name: "Alaturka", tag: "Double viande", image: sandwichAlaturka, alt: "Alaturka : pain artisanal rempli de viande d’entrecôte et d’oignons grillés", sandwich: findPrice("sandwichs", "Sandwich Alaturka"), menu: findPrice("menus", "Alaturka"), text: "Viande d’entrecôte, supplément viande, oignons grillés et sauce." },
]

export default function Signatures() {
  return (
    <section className="section-shell signatures" id="signatures" aria-labelledby="signatures-title">
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
  )
}
