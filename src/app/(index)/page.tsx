import type {Restaurant} from "@/types";

import api from "@/api";
import {RestaurantCard} from "@/app/(index)/components/restaurantCard/";
import SearchAction from "@/app/(index)/components/SearchAction";

export default async function HomePage({searchParams}: {searchParams: {q: string}}) {
  const restaurants: Restaurant[] = await api.search(searchParams.q);

  return (
    <section>
      {/* <SearchBox /> */}
      <SearchAction param={searchParams.q} />

      <br />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {!restaurants.length && "No hay resultados"}
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </section>
  );
}
