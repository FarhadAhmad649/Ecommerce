import React, { useContext, useEffect, useState } from "react";
import ProductItems from "../components/ProductItems";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

function Collection() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const { products, search, showSearch } = useContext(ShopContext);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(search && showSearch){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productsCopy);
  };

  const handleSort = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    handleSort();
  }, [sortType]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 sm:gap-4 lg:gap-6 my-10">
      {/* Leftside Search Area */}
      <div>
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="text-xl font-medium my-2 flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div
          className={`mt-6 flex flex-col gap-4 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <div className="border border-gray-300 px-4 py-2 flex flex-col gap-1">
            <p className="text-md font-bold text-gray-600 mb-1 ">CATEGORIES</p>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="catogory"
                value={"Men"}
                onChange={toggleCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Men
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="catogory"
                value={"Women"}
                onChange={toggleCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Women
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="catogory"
                value={"Kids"}
                onChange={toggleCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Kids
              </label>
            </div>
          </div>

          <div className="border border-gray-300 px-4 py-2 flex flex-col gap-2">
            <p className="text-md font-bold text-gray-600 mb-1 ">TYPE</p>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="type"
                value={"Topwear"}
                onChange={toggleSubCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Topwear
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="type"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Bottomwear
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="type"
                value={"Winterwear"}
                onChange={toggleSubCategory}
                className=""
              />
              <label className="" htmlFor="">
                {" "}
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-5">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          <select
            name="price"
            id=""
            className="px-8 py-2 border-2 border-slate-300 rounded"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Select:</option>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filterProducts.map((item, index) => (
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
    </div>
  );
}

export default Collection;
