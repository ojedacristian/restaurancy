import {redirect} from "next/navigation";

export default async function SearchAction({param}: {param: string}) {
  const searchAction = async (formData: FormData) => {
    "use server";
    redirect(`/?q=${formData.get("query")}`);
  };

  return (
    <form action={searchAction}>
      <input defaultValue={param || ""} name="query" type="text" />
      <button type="submit">Buscar</button>
    </form>
  );
}
