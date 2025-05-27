import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";
import Banner from "./components/Navbar/banner";
import Footer from "./components/Footer";
import Product from "./components/Product";
import NewAddition from "./components/NewAddition";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* <Topbar/>
      <Navbar />
      <Banner/>
      <Product/>
      <NewAddition/>
      <Footer/> */}
      
      {/* <Login/> */}
      <Register/>
    
    </>
  );
}

export default App;
