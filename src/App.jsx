import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import RootLayOut from "./components/RootLayOut.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },


      ]
    },
    {
      path: '*',
      element: <NotFound />

    }



  ]);
  return <RouterProvider router={router} />
}
