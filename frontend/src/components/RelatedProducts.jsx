import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

const RelatedProducts = ({category, subCategory})=> {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=> category === item.category)

            const relatedProudcts = productsCopy.filter((item)=> subCategory === item.subCategory)

            setRelated(relatedProudcts.slice(0,5))

        }
    },[])
  return (
    <div className="my-24">
      <Title text1={"RELATED"} text2={"PRODUCTS"} />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-2 my-5">
        {related.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts