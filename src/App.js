import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

import { useEffect, useState } from "react";
import SingleProduct from "./pages/SingleProduct";
import CustomerForm from "./components/CustomerForm";
import { useDispatch, useSelector } from "react-redux";
import { setData, setFilterData, setLoading } from "./redux/Slices/getProductsSlice";


function App() {

  // const {getProducts}= useSelector((state)=>state)

  const dispatch= useDispatch()

  const Cat_Url = "https://fakestoreapi.com/products/categories";
  const API_URL = "https://fakestoreapi.com/products";

    async function fetchProductCat(){
      dispatch( setLoading() )
      try {
        const res= await fetch(Cat_Url);
        const data= await res.json();
        dispatch(setFilterData(data))

      } catch (error) {
        console.log("error in loading")
      }
    }

    async function fetchProductData(){
      dispatch( setLoading() )
      try {
        const res= await fetch(API_URL);
        const data= await res.json();
        dispatch(setData(data));

      } catch (error) {
        console.log("error in loading")
        // dispatch(setError())
      }
    }
    
    useEffect(()=>{
      fetchProductData()
      fetchProductCat()
    },[])
  
  return (
    // overflow-hidden
  <div >
    <Navbar />
    <MainNavbar/>
    <Routes>
        <Route path="/" element={<Home id="top" />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<ProductPage  />} />

        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cart/checkout" element={<Checkout/>} />
        <Route path="/products/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/cart/checkout/placeorder" element={<CustomerForm/>} />

        <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
     
  </div>
  )
}

export default App;
