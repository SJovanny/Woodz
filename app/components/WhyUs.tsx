import Image from "next/image"
import doner from "../../public/images/doner.jpeg"
import pourquoiNous from "../../public/images/pourquoinous.jpg"

const REASONS = [
  { title: "Une viande qu’on ne trouve pas ailleurs", text: "Nos broches sont montées à la main avec 100 % de viande d’entrecôte pur bœuf. Pas de mélange, pas de compromis." },
  { title: "Un pain qui a du caractère", text: "Pain artisanal aux graines de sésame et de nigelle, croustillant dehors, moelleux dedans." },
  { title: "Du frais, en vrai", text: "Crudités et légumes grillés préparés chaque matin, et servis sans compter." },
  { title: "Une affaire de famille", text: "WoodZ est né en Alsace. On vous accueille comme à la maison, avec le sourire en plus." },
]

// The story photo asks the question in its own lettering; the section answers it.
export default function WhyUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="section-shell why__inner">
        <div className="why__media">
          <Image className="why__story" src={pourquoiNous} alt="Pourquoi venir chez nous ? Viande d’entrecôte servie à la pince dans une barquette avec frites et crudités" sizes="(max-width: 760px) 70vw, 26vw" placeholder="blur" />
          <Image className="why__shot" src={doner} alt="Döner garni de roquette, tomate et chou rouge, tenu par un cuisinier devant le comptoir de crudités" sizes="(max-width: 760px) 50vw, 20vw" placeholder="blur" />
          <span className="why__sticker" aria-hidden="true">
            Fait
            <br />
            maison
          </span>
        </div>
        <div className="why__text">
          <p className="kicker">Pourquoi venir chez nous&nbsp;?</p>
          <h2 id="why-title">
            Parce qu’ici, <span>tout compte.</span>
          </h2>
          <ol className="why__list">
            {REASONS.map(({ title, text }) => (
              <li key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
