import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import {Link} from 'react-router-dom'

function ProductItems({id, image, name, price}) {

    const {currency} = useContext(ShopContext)

  return (
    <Link className='cursor-pointer text-xs text-gray-700 mb-2 hover:scale-105 transition-all duration-300' to={`/product/${id}`}>
        <div className="flex flex-col gap-2">
            <img className="w-64" src={image[0]} alt="" />
            <div className='px-2'>
                <p>{name}</p>
                <p>
                {currency}<span className='font-bold'>{price}</span>
                </p>
            </div>
        </div>
    </Link>
  );
}

export default ProductItems