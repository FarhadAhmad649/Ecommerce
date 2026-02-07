import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../src/pages/About.jsx'
import Cart from "../src/pages/Cart.jsx";
import Collection from "../src/pages/Collection.jsx"; 
import Contact from "../src/pages/Contact.jsx"; 
import Home from "../src/pages/Home.jsx"; 
import Login from "../src/pages/Login.jsx"; 
import Orders from "../src/pages/Orders.jsx"; 
import PlaceOrder from "../src/pages/PlaceOrder.jsx"; 
import Product from "../src/pages/Product.jsx"; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App