import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Footer() {

  return (
    <div>
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-between items-start mt-30 mb-10">
        <div className="flex flex-col gap-2 sm:w-2/3 max-w-120">
          <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit
            impedit vero cupiditate ipsa. Aperiam aliquid reiciendis eveniet
            temporibus illum Lorem ipsum dolor sit amet consectetur adipisicing
            elit something that you ever seen today.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-medium">COMPANY</h3>
          <ul className="text-gray-600 flex flex-col">
            <NavLink className="hover:text-black" to={"/"}>
              Home
            </NavLink>
            <NavLink className="hover:text-black" to={"/about"}>
              About us
            </NavLink>
            <NavLink className="hover:text-black" to={"/delivery"}>
              Delivery
            </NavLink>
            <NavLink className="hover:text-black" to={"privacy-policy"}>
              Privacy Policy
            </NavLink>
          </ul>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start">
          <h3 className="text-xl font-medium">GET IN TOUCH</h3>
          <div className="text-gray-600">
            <p>+1-212-456-7897</p>
            <p>greatstackdev@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />
      <p className='my-7 text-center text-gray-700'>Copyright 2026 @ AhmadStack.dev - All Rights Reserved.</p>
    </div>
  );
}

export default Footer