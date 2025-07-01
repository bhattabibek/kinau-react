import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar";
import Banner from "../components/Navbar/Banner";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
           <Cart/>
           <Dashboard/>
      <Checkout/>
 
      <ProductList/>

      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
