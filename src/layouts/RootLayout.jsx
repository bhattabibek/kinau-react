import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar";
import Banner from "../components/Navbar/Banner";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
    <ProductList/>
      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;
