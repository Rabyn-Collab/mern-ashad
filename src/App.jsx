import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Categories from "./categories/Categories"
import CategoryItems from "./category-items/CategoryItems"

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Categories />
        },
        {
          path: 'category-items/:name',
          element: <CategoryItems />
        }

      ]
    }
  ])
  return <RouterProvider router={router} />
}
