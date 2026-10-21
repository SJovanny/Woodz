import Image from "next/image"
import Link from "next/link"
import logo from "../../public/images/logo-woodz.png"
import { PhoneIcon, PinIcon } from "./Icons"

type NavLink = { href: string; label: string }

// The restaurant pages pass their phone number; the brand home points to the restaurant list instead.
export default function SiteHeader({ links, phone }: { links: NavLink[]; phone?: { display: string; href: string } }) {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__logo" aria-label="WoodZ Kebab House, accueil">
        <Image src={logo} alt="" width={150} height={61} preload />
      </Link>
      <nav aria-label="Navigation principale" className="site-header__nav">
        {links.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      {phone ? (
        <a className="button button--red button--small" href={phone.href} aria-label={`Appeler le ${phone.display}`}>
          <PhoneIcon /> <span>{phone.display}</span>
        </a>
      ) : (
        <Link className="button button--red button--small" href="/#restaurants" aria-label="Nos restaurants">
          <PinIcon /> <span>Nos restaurants</span>
        </Link>
      )}
    </header>
  )
}
