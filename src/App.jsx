import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
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

        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />

    }



  ]);
  return <RouterProvider router={router} />
}
