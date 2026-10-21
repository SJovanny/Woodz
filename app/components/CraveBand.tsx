import Image from "next/image"
import type { ReactNode } from "react"
import gourmandise from "../../public/images/gourmandise.jpg"

// Closing call to action: the photo asks "Une envie de gourmandise ?", the band answers with the page's own actions.
export default function CraveBand({ title, lead, children }: { title: ReactNode; lead: string; children: ReactNode }) {
  return (
    <section className="crave" aria-labelledby="crave-title">
      <div className="section-shell crave__inner">
        <div className="crave__media">
          <Image src={gourmandise} alt="Une envie de gourmandise ? Un cuisinier WoodZ tend un döner garni de sauce blanche, oignons rouges et chou rouge" sizes="(max-width: 760px) 80vw, 30vw" placeholder="blur" />
        </div>
        <div className="crave__text">
          <p className="kicker">Une petite faim&nbsp;?</p>
          <h2 id="crave-title">{title}</h2>
          <p className="crave__lead">{lead}</p>
          <div className="crave__actions">{children}</div>
        </div>
      </div>
    </section>
  )
}
