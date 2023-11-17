"use client";

export default function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return <div>Ha ocurrido un error</div>;
}
