import type {Restaurant} from "@/api";

import {ImageResponse} from "next/og";

import api from "@/api";

export const runtime = "edge";

export const alt = "alt PERSONALIZADO de imagen";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpeg";

export default async function Image({params: {id}}: {params: {id: string}}) {
  const restaurant: Restaurant = await api.fetch(id);

  return new ImageResponse(
    (
      <>
        <img
          alt=""
          height={300}
          src={restaurant.image}
          style={{
            objectFit: "cover",
          }}
          width={600}
        />
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div>{restaurant.name}</div>

          <div>{restaurant.description}</div>
        </div>
      </>
    ),
    {
      ...size,
    },
  );
}
