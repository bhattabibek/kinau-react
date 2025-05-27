import React from 'react'
;
import { FaOpencart } from "react-icons/fa";
const Login = () => {
  return (
    <>
    <div className='p-4 md:mx-28 lg:mx-120'>
    <h1 className="flex text-6xl text-center justify-center ">
                KINAU
                <FaOpencart className="text-[#a32b06]" />
              </h1>
      <form className='flex flex-col m-7 gap-6 '>
        
        <input type='text' placeholder='Enter Your Email' className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type='password' placeholder='Enter your password' className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"'/>
        <button className='bg-[#1976D2] rounded-4xl px-4 p-4 text-white'>Login</button>
      </form>
      <div className='text-center underline'>Forgot your Password?</div>
    </div>
    </>
  )
}

export default Login