import { createBrowserRouter, RouterProvider } from "react-router"

import RootLayout from "./components/RootLayout.jsx";
import Home from "./home/Home.jsx";
import UserAdd from "./users/UserAdd.jsx";
import UserEdit from "./users/UserEdit.jsx";


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Home />

        },
        {
          path: 'add-user',
          element: <UserAdd />
        },
        {
          path: 'edit-user/:id',
          element: <UserEdit />
        }

      ]
    }
  ])
  return <RouterProvider router={router} />
}