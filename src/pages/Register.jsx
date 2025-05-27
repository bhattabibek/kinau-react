import React from 'react'
import { FaOpencart } from "react-icons/fa";
const Register = () => {
  return (
    <>
    <div className='p-4 md:mx-28 lg:mx-120'>
      <h1 className="flex text-6xl text-center justify-center ">
                    KINAU
                    <FaOpencart className="text-[#a32b06]" />
                  </h1>
    <form className='flex flex-col m-7 gap-6 '>
        <input type='text' placeholder='Enter Your Email' className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type='password' placeholder='enter your password' className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type='confirm_password' placeholder='confirm your password' className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button className='bg-[#1976D2] rounded-4xl px-4 p-4 text-white'>Register</button>
      </form>
      <h2 className='underline text-center'>You Agree to Our Terms and Conditions by continuing</h2>
      </div>
      </>
  )
}

export default Register