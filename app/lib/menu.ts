import type { StaticImageData } from "next/image"
import assietteAlaturka from "../../public/images/carte/assiette-alaturka.png"
import assietteClassique from "../../public/images/carte/assiette-classique.png"
import assietteTenders from "../../public/images/carte/assiette-tenders.png"
import assietteVeggi from "../../public/images/carte/assiette-veggi.png"
import assietteWoodz from "../../public/images/carte/assiette-woodz.png"
import boxTenders from "../../public/images/carte/box-tenders.png"
import boxViande from "../../public/images/carte/box-viande.png"
import enfantNuggets from "../../public/images/carte/enfant-nuggets.png"
import enfantViande from "../../public/images/carte/enfant-viande.png"
import menuAlaturka from "../../public/images/carte/menu-alaturka.png"
import menuAmericain from "../../public/images/carte/menu-americain.png"
import menuBox from "../../public/images/carte/menu-box.png"
import menuDonerSimple from "../../public/images/carte/menu-doner-simple.png"
import menuLeWoodz from "../../public/images/carte/menu-le-woodz.png"
import menuVeggi from "../../public/images/carte/menu-veggi.png"

// Transcribed from the 2025 menu board (public/images/carte-woodz-2025.png), the same in every restaurant. Prices in euros, TTC.
// Dish images are cut out of that board (black background removed, price badges erased).
export type MenuItem = { name: string; price: number; description?: string; note?: string; veggie?: boolean; image?: StaticImageData }
export type MenuSection = { id: string; title: string; subtitle?: string; items: MenuItem[] }

export const MENU: MenuSection[] = [
  {
    id: "menus",
    title: "Menus",
    subtitle: "Sandwich, frites et boisson",
    items: [
      { name: "Le Wood’Z", price: 15.5, image: menuLeWoodz, note: "Notre spécialité", description: "Viande d’entrecôte, mélange de légumes grillés, crudités, feta, roquette et sauce" },
      { name: "Döner Simple", price: 14.5, image: menuDonerSimple, note: "Le classique", description: "Viande d’entrecôte, crudités et sauce" },
      { name: "Alaturka", price: 17.5, image: menuAlaturka, description: "Viande d’entrecôte, supplément viande, oignons grillés et sauce" },
      { name: "L’Américain", price: 13.9, image: menuAmericain, description: "Viande d’entrecôte, frites et sauce" },
      { name: "Veggi", price: 13.5, image: menuVeggi, veggie: true, description: "Feta, mélange de légumes grillés, crudités et sauce" },
    ],
  },
  {
    id: "sandwichs",
    title: "Sandwichs",
    subtitle: "Pain artisanal au sésame et à la nigelle",
    items: [
      { name: "Sandwich Wood’Z", price: 11, description: "Viande d’entrecôte, mélange de légumes grillés, crudités, feta, roquette et sauce" },
      { name: "Sandwich Döner", price: 9.5, description: "Viande d’entrecôte, crudités et sauce" },
      { name: "Sandwich Américain", price: 11.5, description: "Viande d’entrecôte, frites et sauce", note: "Crudités +1,50 €" },
      { name: "Sandwich Alaturka", price: 12.9, description: "Viande d’entrecôte, supplément viande, oignons grillés et sauce" },
      { name: "Sandwich Veggi", price: 8.9, veggie: true, description: "Feta, mélange de légumes grillés, crudités, roquette et sauce" },
    ],
  },
  {
    id: "assiettes",
    title: "Assiettes",
    subtitle: "Servies avec frites",
    items: [
      { name: "Assiette Wood’Z", price: 17.9, image: assietteWoodz, description: "Viande d’entrecôte, mélange de légumes grillés, frites, crudités, feta, roquette et sauce" },
      { name: "Assiette Classique", price: 15.9, image: assietteClassique, description: "Viande d’entrecôte, frites, crudités et sauce" },
      { name: "Assiette Alaturka", price: 18.9, image: assietteAlaturka, description: "Viande d’entrecôte, supplément viande, oignons grillés, frites, crudités et sauce" },
      { name: "Assiette Tenders", price: 14.5, image: assietteTenders, description: "Tenders 4 pièces, frites, crudités et sauce" },
      { name: "Assiette Veggi", price: 12.9, image: assietteVeggi, veggie: true, description: "Feta, mélange de légumes grillés, frites, crudités et sauce" },
    ],
  },
  {
    id: "box",
    title: "Box",
    items: [
      { name: "Menu Box", price: 14.5, image: menuBox, description: "Box viande avec frites, légumes ou crudités, un tiramisu et une boisson" },
      { name: "Box Viande", price: 10.5, image: boxViande, description: "Viande d’entrecôte avec frites, légumes ou crudités" },
      { name: "Box Tenders", price: 9.5, image: boxTenders, description: "Tenders 3 pièces et frites" },
    ],
  },
  {
    id: "enfant",
    title: "Menu enfant",
    items: [
      { name: "Menu viande", price: 7.5, image: enfantViande, description: "Viande d’entrecôte, frites, sauce et 1 Capri-Sun" },
      { name: "Menu nuggets", price: 7.5, image: enfantNuggets, description: "4 nuggets, frites, sauce et 1 Capri-Sun" },
    ],
  },
  {
    id: "supplements",
    title: "Suppléments",
    items: [
      { name: "Viande 50 g", price: 2.9 },
      { name: "Viande 100 g", price: 5.5 },
      { name: "Feta", price: 1.5 },
      { name: "Crudités", price: 1.5, note: "2 au choix" },
      { name: "Sauce", price: 0.5 },
    ],
  },
]

export const SAUCES = ["Ketchup", "Mayonnaise", "Algérienne", "Andalouse", "Sauce blanche", "Sauce rouge", "Samouraï", "Harissa"]

export const formatPrice = (price: number) => `${price.toFixed(2).replace(".", ",")} €`
