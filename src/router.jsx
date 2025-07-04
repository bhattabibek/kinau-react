import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProductList from "./components/ProductList.jsx"; // Add extensions for consistency
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Test from "./components/Test.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Checkout from "./pages/Checkout.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Test /> }],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "checkout", element: <Checkout /> },
  { path: "cart", element: <Cart /> },
  { path: "product", element: <Product /> },
]);
