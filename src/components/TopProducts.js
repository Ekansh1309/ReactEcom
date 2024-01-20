import React from 'react'
import "../App.css";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity } from '../redux/Slices/cartSlice';
import { setData, setError } from '../redux/Slices/getProductsSlice';
import { setLoading } from '../redux/Slices/getProductsSlice';
import CategoryProduct from './CategoryProduct';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';

const TopProducts = () => {
  const dispatch= useDispatch()

  const {products, getProducts} = useSelector((state)=>state)

  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false)
  const [posts,setPosts] =useState([])
  
  // const [catposts,setCatposts]= useState([])
  const catposts= getProducts.featurePosts

    async function fetchProductData(){
      setLoading(true)
      try {
        const res= await fetch(API_URL);
        const data= await res.json();
        setPosts(data)
      } catch (error) {
        console.log("error in loading")
        // dispatch(setError())
      }
      setLoading(false)
    }
    
    useEffect(()=>{
      fetchProductData()
    },[])

    useEffect(()=>{
      dispatch(setData(posts))
    },[posts])

    
    

    return (
      <div>
        <h1 className='mt-5 text-center font-bold text-2xl tracking-wider' >Our Services</h1>
        {
          loading ? (<Spinner/>) : 
          (
            catposts.length >0 ? 
            // grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4
            (
                  <div className= {` flex flex-wrap justify-center max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[70vh] `}>
                    {
                      catposts.map((post)=>(
                        <CategoryProduct key={post.id} post={post} 
                         />
                        ))
                      }
                  </div>
            ): 
            (<div className="flex justify-center items-center"
            >No data found</div>)
          )
        }
      </div>
    )
}

export default TopProducts

