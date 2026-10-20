// Transcribed from the 2025 menu board (public/images/carte-woodz-2025.png). Prices in euros, TTC.
export type MenuItem = { name: string; price: number; description?: string; note?: string; veggie?: boolean }
export type MenuSection = { id: string; title: string; subtitle?: string; items: MenuItem[] }

export const MENU: MenuSection[] = [
  {
    id: "menus",
    title: "Menus",
    subtitle: "Sandwich, frites et boisson",
    items: [
      { name: "Le Wood’Z", price: 15.5, note: "Notre spécialité", description: "Viande d’entrecôte, mélange de légumes grillés, crudités, feta, roquette et sauce" },
      { name: "Döner Simple", price: 14.5, note: "Le classique", description: "Viande d’entrecôte, crudités et sauce" },
      { name: "Alaturka", price: 17.5, description: "Viande d’entrecôte, supplément viande, oignons grillés et sauce" },
      { name: "L’Américain", price: 13.9, description: "Viande d’entrecôte, frites et sauce" },
      { name: "Veggi", price: 13.5, veggie: true, description: "Feta, mélange de légumes grillés, crudités et sauce" },
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
      { name: "Assiette Wood’Z", price: 17.9, description: "Viande d’entrecôte, mélange de légumes grillés, frites, crudités, feta, roquette et sauce" },
      { name: "Assiette Classique", price: 15.9, description: "Viande d’entrecôte, frites, crudités et sauce" },
      { name: "Assiette Alaturka", price: 18.9, description: "Viande d’entrecôte, supplément viande, oignons grillés, frites, crudités et sauce" },
      { name: "Assiette Tenders", price: 14.5, description: "Tenders 4 pièces, frites, crudités et sauce" },
      { name: "Assiette Veggi", price: 12.9, veggie: true, description: "Feta, mélange de légumes grillés, frites, crudités et sauce" },
    ],
  },
  {
    id: "box",
    title: "Box",
    items: [
      { name: "Menu Box", price: 14.5, description: "Box viande avec frites, légumes ou crudités, un tiramisu et une boisson" },
      { name: "Box Viande", price: 10.5, description: "Viande d’entrecôte avec frites, légumes ou crudités" },
      { name: "Box Tenders", price: 9.5, description: "Tenders 3 pièces et frites" },
    ],
  },
  {
    id: "enfant",
    title: "Menu enfant",
    items: [
      { name: "Menu viande", price: 7.5, description: "Viande d’entrecôte, frites, sauce et 1 Capri-Sun" },
      { name: "Menu nuggets", price: 7.5, description: "4 nuggets, frites, sauce et 1 Capri-Sun" },
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
