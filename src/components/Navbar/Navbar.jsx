import React from "react";
import { FaOpencart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
    <div className="top-10 left-0 fixed bg-white z-50 w-full">
      <h1 className="flex text-6xl text-center justify-center ">
        KINAU
        <FaOpencart className="text-[#a32b06]" />
      </h1>
      <div className="flex justify-evenly text-2xl pt-4 lg:justify-center gap-8 ">
      <h1 className="text-3xl font-bold "><RxHamburgerMenu className="lg:hidden"  /></h1>
      <div className="hidden lg:flex gap-8">
        <ul className="flex text-base gap-8">
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
      <h1><FaRegHeart /></h1>
      </div>
      </div>
    </>
  );
};

export default Navbar;
