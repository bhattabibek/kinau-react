import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiVisa } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
const Footer = () => {
  return (
    <>
    <div className='lg:flex gap-8 bg-[#f5f5f5] p-6  justify-evenly '>
      
      <div>
        <h1 className="flex text-6xl text-center justify-center">
                KINAU
                <FaOpencart className="text-[#a32b06]" />
              </h1>
<h1 className='font-bold'>KINAU</h1>
<ul>
  <li>About</li>
  <li>Career</li>
  <li>Terms and conditions</li>
  <li>Privacy Policy</li>
</ul>
      </div>
      <div>
    <ul>
      <h1 className='font-bold'>QUICK LINKS</h1>
      <li>
      FAQ
      </li>
      <li>
        Affiliate
        </li>
        <li>
        Blog
        </li>
        <li>
        Discount
        </li>
    </ul>
      </div>
      <div>
        <h1 className='font-bold'>CONTACT</h1>
        <h3>Phone Number: +987654321</h3>
        <h3>Email at : Kinau@gmail.com</h3>
        <h3>Address: Lazimpat,Kathmandu</h3>
      </div>
      <div className='flex text-5xl'>
      <IoLogoGooglePlaystore/>
      <FaApple />
      
      </div>
     
      <div className='flex text-2xl text-center p-3'>
      <FaFacebook className='text-[#0766ff]' />
      <FaXTwitter />
      <FaInstagram className='text-[#f72628]' />
      </div>
      <div className='flex text-2xl  gap-3 text-center p-3'>
      <SiVisa  className='text-[#101273] text-4xl' />
      <SiMastercard className='text-[#f47018] text-4xl' />
      </div>

      
    </div>
    <div className='text-center p-3'>Copy Right © 2025.All Rights Reserved KINAU. </div>
    </>
  )
}

export default Footer