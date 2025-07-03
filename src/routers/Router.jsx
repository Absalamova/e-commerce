import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/Cart";
import Category from "../pages/category/Category";
import Delivery from "../pages/delivery/Delivery";
import Favorites from "./../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import Categoryfilter from "../pages/category/Categoryfilter";

import ProductListPage from "../pages/product/ProductList";
import SinglePage from "../pages/singlepage/SinglePage";


 


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
                       path: "/category/:id", // ✅ this enables useParams
                      element: <Categoryfilter />
                  },

      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {

        path:"product/:id",
        element: <SinglePage/>
      },
      {
        path: "/products/:tag",
        element: <ProductListPage />
      }

    ],
  },
]);
