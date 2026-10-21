import RestaurantPage, { restaurantMetadata } from "../components/RestaurantPage"

export const metadata = restaurantMetadata("colmar-houssen")

export default function Page() {
  return <RestaurantPage slug="colmar-houssen" />
}
