import RestaurantPage, { restaurantMetadata } from "../components/RestaurantPage"

export const metadata = restaurantMetadata("selestat")

export default function Page() {
  return <RestaurantPage slug="selestat" />
}
