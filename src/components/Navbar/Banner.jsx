import React from 'react';

const Banner = () => {
  return (
    <div className="lg:flex">
      <div>
        <img className="w-full lg:w-[1000px]" src="/ecommerce.jpg" alt="ecommerce" />
      </div>
      <div className="hidden lg:block lg:text-6xl pt-10 m-3.5">
        <p>Welcome to Kinau.com</p>
        <p className='text-2xl'>Kinau.com is an online market place <br/>for all types of products delievered to your Doorstep, fast and easy! </p>
        <button className='sm:hidden lg:block text-xl rounded-4xl p-3 bg-[#FF5722]'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
