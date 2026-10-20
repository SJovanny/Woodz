import type { Metadata, Viewport } from "next"
import { DM_Sans, Rye } from "next/font/google"
import "./globals.css"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./lib/site"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" })
// Rye echoes the western lettering of the WoodZ logo; it is kept to headings.
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--font-rye", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["kebab", "döner", "döner kebab", "Illkirch", "Illkirch-Graffenstaden", "Strasbourg", "Baggersee", "entrecôte", "halal", "WoodZ"],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fr_FR",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/sandwich-le-woodz.jpg", width: 1800, height: 1201, alt: "Le sandwich Wood’Z : viande d’entrecôte, légumes grillés, feta et roquette" }],
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/images/sandwich-le-woodz.jpg"] },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${rye.variable}`}>
      <body>{children}</body>
    </html>
  )
}
