// Restaurant facts, taken from the official page https://woodz-kebab-house.fr/restaurants/woodz-kebab-house-illkirch-graffenstaden/
// No domain is chosen yet: set NEXT_PUBLIC_SITE_URL on Vercel once it is.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
export const SITE_NAME = "WoodZ Kebab House Illkirch"
export const SITE_TITLE = "WoodZ Kebab House Illkirch-Graffenstaden | Döner kebab 100 % entrecôte de bœuf"
export const SITE_DESCRIPTION =
  "Döner kebab 100 % viande d’entrecôte pur bœuf, pain artisanal au sésame et à la nigelle, légumes frais et frites croustillantes. Sur place ou à emporter, 40 rue de l’Industrie à Illkirch-Graffenstaden."

export const RESTAURANT = {
  name: "WoodZ Kebab House",
  city: "Illkirch-Graffenstaden",
  street: "40 Rue de l’Industrie",
  postalCode: "67400",
  landmark: "Près du Sport 2000, Illkirch Baggersee",
  phoneDisplay: "07 82 72 29 02",
  phoneHref: "tel:+33782722902",
  phoneE164: "+33782722902",
  mapsUrl: "https://maps.google.com/?cid=13456996333397206344",
  mapsEmbed: "https://www.google.com/maps?q=WoodZ+Kebab+House,+40+Rue+de+l%27Industrie,+67400+Illkirch-Graffenstaden&output=embed",
  instagram: "https://www.instagram.com/woodz_kebabhouse/",
  facebook: "https://www.facebook.com/p/Woodz-Kebab-House-100065145715097/",
  officialSite: "https://woodz-kebab-house.fr/",
}

// Opening slots in minutes after midnight, Europe/Paris. Index 0 is Monday.
export type Slot = readonly [open: number, close: number]
const h = (hours: number, minutes = 0) => hours * 60 + minutes

export const OPENING_HOURS: readonly { day: string; slots: readonly Slot[]; note?: string }[] = [
  { day: "Lundi", slots: [[h(11), h(14)], [h(18), h(21)]] },
  { day: "Mardi", slots: [[h(11), h(14)], [h(18), h(21)]] },
  { day: "Mercredi", slots: [[h(11), h(14)], [h(18), h(21)]] },
  { day: "Jeudi", slots: [[h(11), h(14)], [h(18), h(21)]] },
  { day: "Vendredi", slots: [[h(11), h(14)], [h(18), h(21)]] },
  { day: "Samedi", slots: [[h(11), h(21)]], note: "non-stop" },
  { day: "Dimanche", slots: [[h(17), h(21)]] },
]

export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`
}

export const formatSlots = (slots: readonly Slot[]) => slots.map(([open, close]) => `${formatTime(open)} – ${formatTime(close)}`).join(" · ")

// The other WoodZ restaurants, linked like on the brand home page.
export const OTHER_RESTAURANTS = [
  {
    name: "Sélestat ZI Nord",
    address: "16 Rue de la Maison Rouge, 67600 Sélestat",
    landmark: "Zone industrielle Nord, près du grand Leclerc",
    phoneDisplay: "06 89 04 12 87",
    phoneHref: "tel:+33689041287",
    url: "https://woodz-kebab-house.fr/restaurants/woodz-kebab-house-selestat-zi-nord/",
  },
  {
    name: "Colmar Houssen",
    address: "1 Rue de Ribeaupierre, 68125 Houssen",
    landmark: "Près de la zone commerciale",
    phoneDisplay: "03 89 30 21 54",
    phoneHref: "tel:+33389302154",
    url: "https://woodz-kebab-house.fr/restaurants/woodz-kebab-house-colmar-houssen/",
  },
]
