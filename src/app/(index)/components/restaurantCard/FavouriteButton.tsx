"use client";
import type {Restaurant} from "@/types";

import {useState} from "react";
import dynamic from "next/dynamic";

function FavouriteButton({restaurant}: {restaurant: Restaurant}) {
  const [isFavourite, setIsFavourite] = useState(
    window.localStorage.getItem("favorites")?.includes(restaurant.id),
  );

  const toggleFavourite = () => {
    let favourites: number[] = JSON.parse(window.localStorage.getItem("favorites") || "[]");

    favourites = isFavourite
      ? favourites.filter((fav) => fav !== Number(restaurant.id))
      : [...favourites, Number(restaurant.id)];

    window.localStorage.setItem("favorites", JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };

  return (
    <button
      className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={toggleFavourite}
    >
      ♥
    </button>
  );
}

export const DynamicFavouriteButton = dynamic(async () => FavouriteButton, {ssr: false});
