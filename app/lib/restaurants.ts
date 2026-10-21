import type { StaticImageData } from "next/image"
import colmarHoussenPhoto from "../../public/images/restaurants/colmar-houssen.jpg"
import illkirchPhoto from "../../public/images/restaurants/illkirch.jpg"
import selestatPhoto from "../../public/images/restaurants/selestat.jpg"
import sandwichAlaturka from "../../public/images/sandwich-alaturka.jpg"
import sandwichDoner from "../../public/images/sandwich-doner.jpg"
import sandwichLeWoodz from "../../public/images/sandwich-le-woodz.jpg"
import type { OpeningHours } from "./site"

// Facts from each restaurant page of https://woodz-kebab-house.fr/restaurants/.
export type Restaurant = {
  slug: string
  name: string
  shortName: string
  area: string
  street: string
  postalCode: string
  city: string
  landmark: string
  phoneDisplay: string
  phoneE164: string
  hours: OpeningHours
  photo: StaticImageData
  photoAlt: string
  heroImage: StaticImageData
  seoTitle: string
  seoDescription: string
}

const h = (hours: number, minutes = 0) => hours * 60 + minutes
const WEEKDAYS = { slots: [[h(11), h(14)], [h(18), h(21)]] } as const
const weekWith = (sunday: OpeningHours[number]["slots"]): OpeningHours => [
  { day: "Lundi", ...WEEKDAYS },
  { day: "Mardi", ...WEEKDAYS },
  { day: "Mercredi", ...WEEKDAYS },
  { day: "Jeudi", ...WEEKDAYS },
  { day: "Vendredi", ...WEEKDAYS },
  { day: "Samedi", slots: [[h(11), h(21)]], note: "non-stop" },
  { day: "Dimanche", slots: sunday },
]

export const RESTAURANTS: Restaurant[] = [
  {
    slug: "illkirch",
    name: "Illkirch-Graffenstaden",
    shortName: "Illkirch",
    area: "Illkirch Baggersee",
    street: "40 Rue de l’Industrie",
    postalCode: "67400",
    city: "Illkirch-Graffenstaden",
    landmark: "Près du Sport 2000, au cœur de la zone industrielle",
    phoneDisplay: "07 82 72 29 02",
    phoneE164: "+33782722902",
    hours: weekWith([[h(17), h(21)]]),
    photo: illkirchPhoto,
    photoAlt: "Le chalet en bois WoodZ Kebab House, 40 rue de l’Industrie à Illkirch-Graffenstaden",
    heroImage: sandwichLeWoodz,
    seoTitle: "Kebab Illkirch-Graffenstaden, Strasbourg Sud – Döner 100 % bœuf",
    seoDescription:
      "WoodZ Kebab House Illkirch-Graffenstaden, 40 rue de l’Industrie près du Sport 2000 : döner kebab 100 % entrecôte de bœuf, pain artisanal, légumes frais. Sur place ou à emporter.",
  },
  {
    slug: "selestat",
    name: "Sélestat ZI Nord",
    shortName: "Sélestat",
    area: "Sélestat ZI Nord",
    street: "16 Rue de la Maison Rouge",
    postalCode: "67600",
    city: "Sélestat",
    landmark: "Zone industrielle Nord, près du grand Leclerc",
    phoneDisplay: "06 89 04 12 87",
    phoneE164: "+33689041287",
    hours: weekWith([]),
    photo: selestatPhoto,
    photoAlt: "L’équipe WoodZ devant le chalet en bois de Sélestat, zone industrielle Nord",
    heroImage: sandwichDoner,
    seoTitle: "Kebab Sélestat ZI Nord – Döner 100 % bœuf",
    seoDescription:
      "WoodZ Kebab House Sélestat, 16 rue de la Maison Rouge en zone industrielle Nord : döner kebab 100 % entrecôte de bœuf, pain artisanal, légumes frais. Sur place ou à emporter.",
  },
  {
    slug: "colmar-houssen",
    name: "Colmar Houssen",
    shortName: "Houssen",
    area: "Houssen, près de Colmar",
    street: "1 Rue de Ribeaupierre",
    postalCode: "68125",
    city: "Houssen",
    landmark: "Près de la zone commerciale de Houssen",
    phoneDisplay: "03 89 30 21 54",
    phoneE164: "+33389302154",
    hours: weekWith([[h(17), h(21)]]),
    photo: colmarHoussenPhoto,
    photoAlt: "Le restaurant WoodZ Kebab House de Houssen et sa terrasse couverte",
    heroImage: sandwichAlaturka,
    seoTitle: "Kebab Colmar Houssen – Döner 100 % bœuf",
    seoDescription:
      "WoodZ Kebab House Colmar Houssen, 1 rue de Ribeaupierre près de la zone commerciale : döner kebab 100 % entrecôte de bœuf, pain artisanal, légumes frais. Sur place ou à emporter.",
  },
]

export const getRestaurant = (slug: string) => {
  const restaurant = RESTAURANTS.find((r) => r.slug === slug)
  if (!restaurant) throw new Error(`Unknown restaurant: ${slug}`)
  return restaurant
}

export const fullAddress = (r: Restaurant) => `${r.street}, ${r.postalCode} ${r.city}`
export const phoneHref = (r: Restaurant) => `tel:${r.phoneE164}`
// The official pages all link the same Google Maps listing (Sélestat's), so directions are built from each address instead.
export const mapsUrl = (r: Restaurant) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`WoodZ Kebab House, ${fullAddress(r)}`)}`
