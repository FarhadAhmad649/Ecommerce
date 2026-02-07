import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {

    const [menu, setMenu] = useState(false)

    const {showSearch, setShowSearch} = useContext(ShopContext)

  return (
    <div className="flex justify-between items-center py-4 font-medium">
      <Link to={"/"}>
        <img className="w-22 cursor-pointer" src={assets.logo} alt="" />
      </Link>

      <ul className="hidden sm:flex sm:items-center sm:justify-center gap-2 md:gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center justify-center gap-6">
        <img onClick={()=> setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="" />

        <div className="flex gap-6">
          {/* PROFILE GROUP */}
          <div className="group relative">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />

            <div className="hidden group-hover:block absolute right-0 pt-8">
              <div className="flex flex-col gap-2 w-36 bg-slate-100 text-gray-500 rounded p-3">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>

          {/* MOBILE MENU */}
          <img
            className="sm:hidden w-6 cursor-pointer"
            src={assets.menu_icon}
            alt=""
            onClick={() => setMenu(true)}
          />
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`absolute top-0 left-0 overflow-hidden h-screen bg-slate-100 transition-all  ${menu ? "w-full" : "w-0"}`}
      >
        <div className="flex justify-between items-center p-4">
          <img className="w-22 cursor-pointer" src={assets.logo} alt="" />
          <img
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt=""
            onClick={() => setMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-center justify-center gap-5 text-sm pt-10 text-gray-700">
          <NavLink
            to={"/"}
            className="flex flex-col items-center gap-1 w-full pt-2"
            onClick={() => setMenu(false)}
          >
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to={"/collection"}
            className="flex flex-col items-center gap-1 w-full pt-2"
            onClick={() => setMenu(false)}
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to={"/about"}
            className="flex flex-col items-center gap-1 w-full pt-2"
            onClick={() => setMenu(false)}
          >
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to={"/contact"}
            className="flex flex-col items-center gap-1 w-full pt-2"
            onClick={() => setMenu(false)}
          >
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
