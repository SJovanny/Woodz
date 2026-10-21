const QUALITIES = [
  { title: "Viande d’entrecôte", text: "100 % pur bœuf, broches artisanales" },
  { title: "Pain artisanal", text: "Aux graines de sésame et de nigelle" },
  { title: "Légumes frais", text: "Préparés chaque jour, servis généreusement" },
  { title: "Frites croustillantes", text: "Assaisonnées au paprika" },
]

export default function Qualities() {
  return (
    <section className="qualities" aria-labelledby="qualities-title">
      <h2 id="qualities-title" className="qualities__title">
        De la qualité <span>et rien d’autre</span>
      </h2>
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
  )
}
