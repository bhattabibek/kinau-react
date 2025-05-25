import React from "react";
import { GrShop } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="lg:flex">
      <div>
        <img
          className="w-full lg:w-[1000px]"
          src="/ecommerce.jpg"
          alt="ecommerce"
        />
      </div>
      <div className="hidden lg:block lg:text-6xl pt-10 m-3.5 pb-8">
        <p className="pb-8">Welcome to Kinau.com</p>
        <p className="font-livvic text-2xl pb-8 ">
          Kinau.com is an online market place <br />
          for all types of products delievered to your Doorstep, fast and easy!{" "}
        </p>
        <button className="flex items-center gap-2 sm:hidden lg:flex text-xl rounded-3xl p-3 bg-[#FF5722] hover:bg-[#D84315] text-white">
  <GrShop />
  <span>SHOP NOW</span>
</button>
      </div>
    </div>
  );
};

export default Banner;
