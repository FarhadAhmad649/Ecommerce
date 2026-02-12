import React, { createContext, useState } from "react";
import { products } from "../assets/assets";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$'
    const delivery_fee = 10
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);
      

    const getCartCount = () =>{
        let totalCount = 0;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {

                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                    
                } catch (error) {
                    toast.error(error.message)
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    const addToCart = async (itemId, size) => {

        setAdded(true);

        setTimeout(() => {
          setAdded(false);
        }, 2000);

        if(!size){
            toast.error('Select Product Size')
            return
        }
        
        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    }

    const updateQuantity = async (itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity

        setCartItems(cartData)
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);

            if(!itemInfo) continue;

            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
        }
        return totalAmount;
    }


    const value = {
        products,
        currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, added,
        getCartCount,
        updateQuantity,
        getCartAmount, navigate,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider