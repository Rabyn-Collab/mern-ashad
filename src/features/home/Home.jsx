import { Image } from "@heroui/react";
import { useGetCocktailsQuery } from "../cocktails/cocktailApi"

export default function Home() {

  const { data, isLoading, error } = useGetCocktailsQuery();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>


  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {data && data.drinks.map((item) => {
        return (
          <div key={item.idDrink} className="space-y-4">
            <h1>{item.strDrink}</h1>
            <Image
              isBlurred
              src={item.strDrinkThumb}
              alt={item.strDrink}
            />
          </div>
        )
      })}

    </div>
  )
}
