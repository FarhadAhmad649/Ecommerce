import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

function Orders() {

  const {currency,backendUrl, token} = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if(!token){
        return null
      }else{
        const response = await axios.post(backendUrl + '/api/order/userOrders', {}, {headers:{token}})

        if(response.data.success){
          let allOrdersItem = []
          response.data.orders.map((order)=>{
            order.items.map((item)=>{
              item['status']= order.status
              item['payment']= order.payment
              item['paymentMethod']= order.paymentMethod
              item['date']= order.date

              allOrdersItem.push(item)
            })
          })
          setOrderData(allOrdersItem.reverse())
        }
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div>
      <div className="border-t pt-16">
        <div className='text-2xl flex items-start mb-8'>
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>

        <div className=" ">
          <div className="">
            {orderData === 0 ? (
              <p className="text-center text-gray-500 py-10">
                OOps! You Did not Add Products to the Cart
              </p>
            ) : (
              orderData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center gap-4 border-t border-b border-gray-700 py-4"
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
                          <p className="">
                            Quantity: <span className='font-medium'>{item.quantity}</span>
                          </p>
                          <p className="">
                            Size:{" "}
                            <span className="font-medium">{item.size}</span>
                          </p>
                        </div>

                        <p className="">
                          Date:{" "}
                          <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                        </p>

                        <p className="">
                          Payment:{" "}
                          <span className="text-gray-400">{item.paymentMethod}</span>
                        </p>
                      </div>
                    </div>

                    <div className=" flex justify-end">
                      <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                        <p className="text-sm md:text-base">{item.status}</p>
                      </div>
                    </div>

                    <div className="flex justify-start md:justify-end">
                      <button
                      onClick={(loadOrderData)} className="border border-gray-400 px-4 py-2 font-medium text-sm text-gray-700 active:bg-gray-200 active:text-black cursor-pointer hover:bg-black hover:text-white">
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