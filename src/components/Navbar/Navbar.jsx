import React from "react";
import { FaOpencart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <h1 className="flex text-6xl text-center justify-center">
        KINAU
        <FaOpencart />
      </h1>
      <div className="flex justify-evenly text-2xl pt-4 lg:justify-center gap-8 ">
      <h1 className="text-3xl font-bold "><RxHamburgerMenu className="lg:hidden"  /></h1>
      <div className="hidden lg:flex gap-8">
        <ul className="flex gap-8">
          <li>
          About Us
          </li>
          <li>
            Products
            </li>
            <li>
            Contact
            </li>
            <li>
            FAQ
            </li>
        </ul>
       
       
     
      </div>
      <h1><BsCart3 /></h1>
      <h1>LOGIN</h1>
      <h1>REGISTER</h1>
      </div>
     
    </>
  );
};

export default Navbar;
