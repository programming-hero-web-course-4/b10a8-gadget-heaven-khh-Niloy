import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import CategoryTab from "./Components/CategoryTab.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
import Cart from "./Components/Cart.jsx";
import Wishlist from "./Components/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            element: <CategoryTab></CategoryTab>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/:categoryName",
            element: <CategoryTab></CategoryTab>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/p/:productId",
        element: <SingleProduct></SingleProduct>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: "",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
