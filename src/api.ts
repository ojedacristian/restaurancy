export interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8Txwhht9nrWNc9pPGMkf2kSZdbuSQnyCwA_mEwhtZdbfLlgP-iMRrX17sIhlcHh60FqUo21smj-vS/pub?output=csv";

const api = {
  list: async (): Promise<Restaurant[]> => {
    const [, ...data] = await fetch(url)
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    const [, ...data] = await fetch(url).then((data) =>
      data.text().then((text) => text.split("\n")),
    );
    const restaurants = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`El restaurant con el id: ${id} no se encuentra`);
    }

    return restaurant;
  },
  search: async function (query = ""): Promise<Restaurant[]> {
    const results = await api.list().then((restaurants) => {
      return restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      );
    });

    return results;
  },
};

export default api;
