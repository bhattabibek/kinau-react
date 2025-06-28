import React from "react";
import { useSelector } from "react-redux";
import { FaOpencart, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";



import { selectTotalQuantity } from "../../features/cart/cartSlice";

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
          <div className="relative flex items-center gap-6">
            <div style={{ position: 'relative', cursor: 'pointer', fontSize: '24px' }}>
              <BsCart3 />
              {totalQuantity > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    minWidth: '20px',
                    textAlign: 'center',
                    lineHeight: '1',
                    pointerEvents: 'none',
                  }}
                >
                  {totalQuantity}
                </span>
              )}
            </div>
            <h1>
              <FaRegHeart />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
