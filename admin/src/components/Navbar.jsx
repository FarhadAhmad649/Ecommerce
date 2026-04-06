import React from 'react'
import {assets} from '../assets/assets'

function Navbar() {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-32 cursor-pointer' src={assets.logo} alt="logo" />
        <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar