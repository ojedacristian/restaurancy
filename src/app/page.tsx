import api from "@/api";
import RestaurantCard from "@/app/components/RestaurantCard";

import {SearchBox} from "./components/SearchBox";

export default async function HomePage() {
  const restaurants = await api.list();

  return (
    <section>
      <SearchBox />
      <br />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </section>
  );
}
