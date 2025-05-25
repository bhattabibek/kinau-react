import React from "react";
import { BsCart2 } from "react-icons/bs";

const Product = () => {
  return (
    <>
    <div className="flex justify-center items-center flex-col mf:flex md:flex-row md:flex-wrap lg:flex">
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

export default Product;
