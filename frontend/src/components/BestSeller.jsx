import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

function BestSeller() {

    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{

        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))

        console.log('bestSeller' , bestSeller)
    },[])

  return (
    <div className="my-10">
      {/* Heading */}
      <Title text1={"BEST"} text2={"SELLER"} />

      <div>
        <p className="text-gray-600 text-center mb-7 mt-3">
          Discover our newest arrivals — carefully selected designs with premium
          quality and modern style.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {bestSeller.map((item, index) => (
          <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller