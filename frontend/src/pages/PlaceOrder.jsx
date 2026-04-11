import React, { useState } from 'react'
import Title from '../components/Title'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

function PlaceOrder() {

    const {currency, backendUrl, token, cartItems, products, delivery_fee, getCartAmount, navigate, setCartItems} = useContext(ShopContext)
    const [method, setMethod] = useState('cod')

    const [formData, setFormData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      street:'',
      city:'',
      state:'',
      zipcode:'',
      country:'',
      phone:''
    })

    const onChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setFormData(data => ({...data, [name]:value}))
    }

    const onSubmitHandler = async (e)=>{
      e.preventDefault()

      try {

        let orderItems = []
        for(const items in cartItems){
            for(const item in cartItems[items]){
              if(cartItems[items][item] > 0){
                const itemInfo = structuredClone(products.find(product => product._id === items))
                if(itemInfo){
                  itemInfo.size = item 
                  itemInfo.quantity = cartItems[items][item]
                  orderItems.push(itemInfo)
                }
                }
          }
        }

        let orderData = {
          address: formData,
          items: orderItems,
          amount: getCartAmount() + delivery_fee,
          date: Date.now(),
        };

        switch(method){

          // API calls for COD
          case 'cod':{
            const response = await axios.post(backendUrl + '/api/order/place',orderData, {headers:{token}})

            if(response.data.success){
              setCartItems({})
              navigate('/orders')
            }else{
              toast.error(response.data.message)
            }
            break;     
          }

          default:
            break;
        }
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row justify-between my-10">
      {/* left section */}
      <div className="flex flex-col gap-4 items-start text-xs">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />

        <div className="flex gap-2">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="First name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="Last name"
            required
          />
        </div>

        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="email"
          placeholder="Email address"
          required
        />

        <input
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="text"
          placeholder="Street"
          required
        />

        <div className="flex gap-2">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="City"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="State"
            required
          />
        </div>

        <div className="flex gap-2">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="Zip code"
            required
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs "
            type="text"
            placeholder="Country"
            required
          />
        </div>

        <input
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border-[1.5px] border-gray-300 py-1 px-2 rounded-xs w-full max-md:w-83"
          type="text"
          placeholder="Phone"
          required
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
            <div className="flex gap-2 flex-col justify-center pt-2">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center gap-2 border-[1.5px] border-gray-300 p-2 lg:p-1 cursor-pointer"
              >
                <p
                  className={`size-3 rounded-full border-gray-300 ${method === "stripe" ? "bg-green-500" : ""}`}
                ></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>

              <div
                onClick={() => setMethod("razorpay")}
                className="flex items-center gap-3 border-[1.5px] border-gray-300 p-2 lg:p-1 cursor-pointer"
              >
                <p
                  className={`size-3 rounded-full border-gray-300 ${method === "razorpay" ? "bg-green-500" : ""}`}
                ></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>

              <div
                onClick={() => setMethod("cod")}
                className="flex justify-start gap-4 border-[1.5px] border-gray-300 p-2 lg:p-1"
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
              type='submit'
              className="px-2 py-2 w-48 bg-black text-white active:bg-gray-600 text-xs cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder