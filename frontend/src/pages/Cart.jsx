import React, {useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotals from '../components/CartTotals'

function Cart() {

  const {cartItems, currency, products, updateQuantity} = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(()=> {

    const tempData = [];

    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
    
  },[cartItems])

  return (
    <div>
      <div className="flex flex-col items-start justify-center gap-2 my-10">
        <div>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div className="w-full my-2 ">
          <div className="">
            {cartData.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                OOps! You Did not Add Products to the Cart
              </p>
            ) : (
              cartData.map((item, index) => {
                const productData = products.find(
                  (product) => product._id === item._id,
                );

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-t border-b border-gray-400 py-4"
                  >
                    <div className="flex gap-2 items-start justify-start">
                      <img className="w-16" src={productData.image[0]} alt="" />

                      <div className="flex flex-col gap-1 justify-start">
                        <p className="font-medium text-md">
                          {productData.name}
                        </p>
                        <div className="flex gap-2 items-center">
                          <p className="text-md font-medium">
                            {currency}
                            {productData.price}
                          </p>
                          <p className="border py-1 w-8 bg-gray-100 cursor-pointer border-gray-300 text-center">
                            {item.size}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="number"
                        className="w-18 border border-gray-400 rounded-full px-3 py-1"
                        defaultValue={item.quantity}
                        min={1}
                        onChange={(e) =>
                          e.target.value === "" ||
                          e.target.validationMessage === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                e.target.value,
                              )
                        }
                      />
                    </div>

                    <img
                      src={assets.bin_icon}
                      className="w-5 h-6"
                      alt=""
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <CartTotals />
      </div>

    </div>
  );
}

export default Cart