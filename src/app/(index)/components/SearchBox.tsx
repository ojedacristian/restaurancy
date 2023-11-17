"use client";

import {useSearchParams, useRouter} from "next/navigation";

export function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget as typeof event.currentTarget & {
      query: {value: string};
    };

    router.push(`/?q=${target.query.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={searchParams.get("q") || ""} name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
