import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const NewAddition = () => {
  return (
    <>
    <h1 className="text-center text-3xl">New Addition</h1>
    <div className="flex justify-center items-center flex-col mf:flex md:flex-row md:flex-wrap lg:flex">
      <div className=" m-4 w-60 h-80 text-center border shadow-2xl">
        <img src="/headphones.jpg" />
        <h2 className="pt-2">Product Name</h2>
        <h3 className="pb-2">Price NPR 3000</h3>
        <h3 className="flex justify-center pb-2 text-amber-700 "><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></h3>
        <div  className="flex justify-center">
  <button className="flex pt-2 items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
    <BsCart2 />
    Add to Cart
  </button>
</div>
      </div>
      <div className=" m-4 w-60 h-80 text-center border shadow-2xl">
        <img src="/headphones.jpg" />
        <h2 className="pt-3">Product Name</h2>
        <h3 className="pb-3">Price NPR 3000</h3>
        <div  className="flex justify-center">
  <button className="flex pt-3 items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
    <BsCart2 />
    Add to Cart
  </button>
</div>
      </div>
      <div className=" m-4 w-60 h-80 text-center border shadow-2xl">
        <img src="/headphones.jpg" />
        <h2 className="pt-3">Product Name</h2>
        <h3 className="pb-3">Price NPR 3000</h3>
        <div  className="flex justify-center">
  <button className="flex pt-3 items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
    <BsCart2 />
    Add to Cart
  </button>
</div>
      </div>
      <div className=" m-4 w-60 h-80 text-center border shadow-2xl">
        <img src="/headphones.jpg" />
        <h2 className="pt-3">Product Name</h2>
        <h3 className="pb-3">Price NPR 3000</h3>
        <div  className="flex justify-center">
  <button className="flex pt-3 items-center gap-2 bg-[#1976D2] text-white px-4 py-2 rounded-2xl">
    <BsCart2 />
    Add to Cart
  </button>
</div>
      </div>
      </div>
    </>
  );
};

export default NewAddition;
