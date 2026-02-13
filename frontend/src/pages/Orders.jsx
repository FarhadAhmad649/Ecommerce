import { useContext } from 'react'
import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

function Orders() {

  const {currency, products} = useContext(ShopContext)

  return (
    <div>
      <div className="border-t pt-16">
        <div className='text-2xl flex items-start mb-8'>
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>

        <div className=" ">
          <div className="">
            {products === 0 ? (
              <p className="text-center text-gray-500 py-10">
                OOps! You Did not Add Products to the Cart
              </p>
            ) : (
              products.slice(1,4).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border-t border-b border-gray-700 py-4"
                  >
                    <div className="flex gap-6 text-sm items-start justify-start">
                      <img
                        className="w-16 sm:w-20"
                        src={item.image[0]}
                        alt=""
                      />

                      <div className="flex flex-col gap-1 justify-start">
                        <p className="font-medium text-base">{item.name}</p>
                        <div className="flex gap-2 items-center">
                          <p className="text-md font-medium">
                            {currency}
                            {item.price}
                          </p>
                          <p className="">Quantity: 1</p>
                          <p className="">Size: M</p>
                        </div>

                        <p className="mt-2">
                          Date:{" "}
                          <span className="text-gray-400">25 july, 2025</span>
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-end">
                      <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                        <p className="text-sm md:text-base">Ready to ship</p>
                      </div>
                    </div>

                    <div className='flex justify-start md:justify-end'>
                      <button className="border border-gray-400 px-4 py-2 font-medium text-sm text-gray-700 active:bg-gray-200 active:text-black cursor-pointer hover:bg-black hover:text-white">
                        Track Order
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders