import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProductList from "./components/ProductList.jsx";  // Add extensions for consistency
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
