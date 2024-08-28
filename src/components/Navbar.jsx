/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-200 text-black py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-10'>iTask</span>
        </div>
      <ul className="flex gap-8 mx-10">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar