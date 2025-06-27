import React from "react";
import { useSelector } from "react-redux";
import { FaOpencart, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { selectTotalQuantity } from '../../features/cart/cartSlice';

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <>
      <div className="top-10 left-0 fixed bg-white z-50 w-full">
        <h1 className="flex text-6xl text-center justify-center ">
          KINAU
          <FaOpencart className="text-[#a32b06]" />
        </h1>
        <div className="flex justify-evenly text-2xl pt-4 lg:justify-center gap-8 ">
          <h1 className="text-3xl font-bold ">
            <RxHamburgerMenu className="lg:hidden" />
          </h1>
          <div className="hidden lg:flex gap-8">
            <ul className="flex text-base gap-8">
              <li>About Us</li>
              <li>Products</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="relative">
            <h1>
              <BsCart3 />
            </h1>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white font-bold">
                {totalQuantity}
              </span>
            )}
          </div>
          <h1>
            <FaRegHeart />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
