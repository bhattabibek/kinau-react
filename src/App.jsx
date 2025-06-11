// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar";
import Banner from "../components/Navbar/Banner"; // ✅ Fixed case
import Footer from "../components/Footer";
import ProductList from "./components/ProductList";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
      <ProductList/>
      
      {/* This is where nested route components like Login or Register will render */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
