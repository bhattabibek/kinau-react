import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-[#1976D2] text-slate-50 px-4 py-2'>
      <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <p className='underline'>Get 20% Off On All Items</p>
        <div className='flex gap-4'>
          <h1 className='cursor-pointer hover:underline'>LOGIN</h1>
          <h1 className='cursor-pointer hover:underline'>REGISTER</h1>
        </div>
      </div>
    </div>
  )
}

export default Topbar
