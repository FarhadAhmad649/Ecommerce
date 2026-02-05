import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

function LatestCollection() {

    const {products, currency} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className="my-10 ">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center">
        <Title text1="LATEST" text2="COLLECTIONS" />

        <div>
          <p className="text-gray-600 text-center mb-7 mt-3">
            Discover our newest arrivals — carefully selected designs with premium quality and modern style.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {
            latestProducts.map((item, index)=>(
                <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
      </div>
    </div>
  );
}

export default LatestCollection