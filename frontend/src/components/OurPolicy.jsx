import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="flex flex-col justify-center items-center">
        <img className="w-12 mb-3" src={assets.exchange_icon} alt="" />
        <p className="font-bold">Easy Exchange Policy</p>
        <p className="text-gray-600">We offer hassle free exchange policy</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img className="w-12 mb-3" src={assets.quality_icon} alt="" />
        <p className="font-bold">7 Days Return Policy</p>
        <p className="text-gray-600">We offer 7 days free return policy</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img className="w-10 mb-3" src={assets.support_img} alt="" />
        <p className="font-bold">Best Customer Support</p>
        <p className="text-gray-600">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy