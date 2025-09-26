import { Form, Input } from "@heroui/react";
import { Formik } from "formik";
import { useLazySearchRecipeQuery } from "../recipes/recipeApi";
import toast from "react-hot-toast";

export default function Home() {
  const [searchRecipe, { isLoading, error, data }] = useLazySearchRecipeQuery();
  console.log(data);
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={async (val, { resetForm }) => {
          try {
            await searchRecipe(val.search)
            resetForm();
          } catch (err) {
            toast.error(err.message)
          }
        }}
      >
        {({ handleChange, values, errors, touched, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-[400px]">
            <Input
              value={values.search}
              onChange={handleChange}
              name="search"
              placeholder="Search" />
          </Form>
        )}
      </Formik>


      {isLoading && <h1>Loading</h1>}
      {data && data.recipes.length > 0 ? data.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h1>{recipe.name}</h1>
          <img src={recipe.image} alt="" />
        </div>
      )) : <h1>No recipes found</h1>}
    </div>
  )
}
