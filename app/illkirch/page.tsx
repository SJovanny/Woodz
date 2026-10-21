import RestaurantPage, { restaurantMetadata } from "../components/RestaurantPage"

export const metadata = restaurantMetadata("illkirch")

export default function Page() {
  return <RestaurantPage slug="illkirch" />
}
