import React from 'react'
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

  const catposts= getProducts.featurePosts    

    return (
      <div>
        <h1 className='mt-5 text-center font-bold text-2xl tracking-wider' >Our Services</h1>
        {
          getProducts.loading ? (<Spinner/>) : 
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


// className="flex flex-wrap justify-center max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"