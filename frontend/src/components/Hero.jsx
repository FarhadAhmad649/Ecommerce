import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Leftside */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-0">
        <div className="max-w-md px-6 sm:px-12 flex flex-col items-center sm:items-start gap-2 text-[#414141]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] md:w-11 bg-[#414141]" />
            <p className="font-medium text-xs md:text-base">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-1 lg:text-5xl leading-relaxed text-black">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <div className="w-8 md:w-11 h-[1px] bg-[#414141]" />
          </div>
        </div>
      </div>

      {/* Hero Rightside */}
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img className="w-full h-auto " src={assets.hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
