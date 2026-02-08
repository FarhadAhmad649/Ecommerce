import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return (
    productData && (
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  onClick={() => setImage(item)}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} className="w-3.5" alt="" />
              <img src={assets.star_icon} className="w-3.5" alt="" />
              <img src={assets.star_icon} className="w-3.5" alt="" />
              <img src={assets.star_icon} className="w-3.5" alt="" />
              <img src={assets.star_icon} className="w-3.5" alt="" />
              <img src={assets.star_dull_icon} className="w-3.5" alt="" />
              <p className="pl-2">(122)</p>
            </div>

            <p className="text-2xl font-medium my-5">
              {currency}
              {productData.price}
            </p>

            <p className="text-gray-600 text-xs leading-loose">
              A lightwight, usually nitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, warm as undershirt or
              outer garment.
            </p>

            <p className="my-5 text-md text-gray-600 font-medium">
              Select Size
            </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 w-11 bg-gray-100 cursor-pointer border-gray-200 ${item === size ? "border-[1.5px] border-gray-400" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>

            <button onClick={()=> addToCart(productData._id, size)} className="px-6 py-2 bg-black text-white my-5 text-sm active:bg-gray-700 ">
              ADD TO CART
            </button>

            <hr className="bg-gray-50 h-[0.5px] mb-2" />

            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-xs">100% Original product.</p>
              <p className="text-gray-600 text-xs">
                Cash on delivery is available on this product.
              </p>
              <p className="text-gray-600 text-xs">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-22 font-bold text-sm">
          <p className="px-6 py-3 border border-gray-200">Description</p>
          <p className="px-6 py-3 bg-gray-50 border text-gray-600 border-gray-200">
            Reviews<span>(122)</span>
          </p>
        </div>
        <div className="w-full border border-gray-200 px-6 py-8 text-gray-600 text-sm mb-20">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="mt-2">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information
          </p>
        </div>

        <div>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    )
  );
}

export default Product;
