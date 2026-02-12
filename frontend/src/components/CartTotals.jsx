import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

function CartTotals() {

  const {currency, delivery_fee, getCartAmount, navigate} = useContext(ShopContext)

  return (
    <div className="flex flex-col w-80">
      <div className="flex justify-start">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="text-xs my-5">
        <div className="border-b border-gray-400 py-2 flex justify-between items-center">
          <p className="text-gray-600">Subtotal:</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>

        <div className="border-b border-gray-400 py-2 flex justify-between items-center">
          <p className="text-gray-600">Shipping Fee:</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>

        <div className="border-b border-gray-400 py-2 flex justify-between items-center">
          <p className="font-medium">Total:</p>
          <p className="font-bold">{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={()=> navigate('/place-order')} className="px-2 py-2 w-48 bg-black text-white active:bg-gray-600 text-xs cursor-pointer">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartTotals;
