import React, { useState } from 'react'
import Title from '../components/Title'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

function PlaceOrder() {

    const {currency, delivery_fee, getCartAmount, navigate} = useContext(ShopContext)
    const [method, setMethod] = useState('cod')


  return (
    <div className="flex flex-col md:flex-row justify-between my-10">
      {/* left section */}
      <div className="flex flex-col gap-4 items-start text-xs">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />

        <div className="flex gap-2">
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="firstname"
            placeholder="First name"
          />
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="lastname"
            placeholder="Last name"
          />
        </div>

        <input
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="email"
          name="email"
          placeholder="Email address"
        />

        <input
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="text"
          name="street"
          placeholder="Street"
        />

        <div className="flex gap-2">
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="state"
            placeholder="State"
          />
        </div>

        <div className="flex gap-2">
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="zipcode"
            placeholder="Zip code"
          />
          <input
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>

        <input
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="text"
          name="phone"
          placeholder="Phone"
        />
      </div>
      {/* right section */}
      <div className="mt-15">
        <div className="flex flex-col w-86">
          <div className="flex justify-start">
            <Title text1={"CART"} text2={"TOTALS"} />
          </div>

          <div className="text-xs my-5">
            <div className="border-b border-gray-400 py-2 flex justify-between items-center">
              <p className="text-gray-600">Subtotal:</p>
              <p>
                {currency}
                {getCartAmount()}.00
              </p>
            </div>

            <div className="border-b border-gray-400 py-2 flex justify-between items-center">
              <p className="text-gray-600">Shipping Fee:</p>
              <p>
                {currency}
                {delivery_fee}.00
              </p>
            </div>

            <div className="border-b border-gray-400 py-2 flex justify-between items-center">
              <p className="font-medium">Total:</p>
              <p className="font-bold">
                {currency}
                {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
              </p>
            </div>
          </div>

          {/* payment method */}
          <div className="flex flex-col items-start my-8">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="flex gap-3 flex-col xl:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center gap-2 border-[1.5px] border-gray-300 p-2 cursor-pointer"
              >
                <p
                  className={`size-3 rounded-full border-gray-300 ${method === "stripe" ? "bg-green-500" : ""}`}
                ></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>

              <div
                onClick={() => setMethod("razorpay")}
                className="flex items-center gap-3 border-[1.5px] border-gray-300 p-2 cursor-pointer"
              >
                <p
                  className={`size-3 rounded-full border-gray-300 ${method === "razorpay" ? "bg-green-500" : ""}`}
                ></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>

              <div
                onClick={() => setMethod("cod")}
                className="flex justify-start gap-4 border-[1.5px] border-gray-300 p-2"
              >
                <p
                  className={`size-3 rounded-full border-gray-300 ${method === "cod" ? "bg-green-500" : ""}`}
                ></p>
                <p className="text-gray-600 text-sm font-medium mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate("/orders")}
              className="px-2 py-2 w-48 bg-black text-white active:bg-gray-600 text-xs cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder