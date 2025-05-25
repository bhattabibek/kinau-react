import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";
import Banner from "./components/Navbar/banner";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Banner/>
      <Product/>
      <Footer/>
      
    
    </>
  );
}

export default App;
