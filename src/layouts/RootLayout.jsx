import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Navbar/banner";
import Product from "../components/Product";
import Footer from "../components/Footer";

import { Outlet } from 'react-router-dom';
 
const RootLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner/>
      <Product/>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
