import type {Restaurant} from "@/api";

import Link from "next/link";

export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {
  return (
    <article key={restaurant.id}>
      <img alt="" className="h-[300px] w-full object-cover" src={restaurant.image} />
      <h2 className="inline-flex items-center gap-2 pt-4 font-bold">
        <Link href={`/${restaurant.id}`}>{restaurant.name}</Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="">({restaurant.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
