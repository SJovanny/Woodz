// Brand-wide facts, taken from https://woodz-kebab-house.fr/. Each restaurant lives in ./restaurants.ts.
// No domain is chosen yet: set NEXT_PUBLIC_SITE_URL on Vercel once it is.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
export const SITE_NAME = "WoodZ Kebab House"
export const SITE_TITLE = "WoodZ Kebab House | Döner kebab 100 % entrecôte de bœuf en Alsace"
export const SITE_DESCRIPTION =
  "Döner kebab 100 % viande d’entrecôte pur bœuf, pain artisanal au sésame et à la nigelle, légumes frais et frites croustillantes. Trois restaurants en Alsace : Illkirch-Graffenstaden, Sélestat et Colmar Houssen."

export const BRAND = {
  instagram: "https://www.instagram.com/woodz_kebabhouse/",
  facebook: "https://www.facebook.com/p/Woodz-Kebab-House-100065145715097/",
}

// Opening slots in minutes after midnight, Europe/Paris. An empty list means closed that day.
export type Slot = readonly [open: number, close: number]
export type OpeningDay = { day: string; slots: readonly Slot[]; note?: string }
export type OpeningHours = readonly OpeningDay[] // index 0 is Monday

export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`
}

export const formatSlots = (slots: readonly Slot[]) =>
  slots.length ? slots.map(([open, close]) => `${formatTime(open)} – ${formatTime(close)}`).join(" · ") : "Fermé"

// Legal identity shown on /mentions-legales, from https://woodz-kebab-house.fr/mentions-legales/.
// The "[À COMPLÉTER" fields are not published there and must be filled in before going live.
export const LEGAL = {
  company: "WOODZ",
  legalForm: "[À COMPLÉTER : forme juridique]",
  siret: "894 856 707 00019",
  vat: "FR73 894856707",
  address: "13 Bois l’Abbesse, 68660 Liepvre",
  email: "contact@woodz-kebab-house.fr",
  publisher: "[À COMPLÉTER : nom du directeur de la publication]",
  designer: "[À COMPLÉTER : votre nom ou raison sociale]",
  host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis, vercel.com",
}
