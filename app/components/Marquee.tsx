// Decorative ribbon of what makes a WoodZ; the same facts are stated in text elsewhere, so it is hidden from assistive tech.
const WORDS = ["Döner kebab", "100 % entrecôte", "Pain maison", "Légumes du jour", "Frites au paprika", "Viande halal", "Fait en Alsace"]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {/* Two identical tracks so the loop is seamless at -50%. */}
      <div className="marquee__track">
        {[...WORDS, ...WORDS].map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  )
}
