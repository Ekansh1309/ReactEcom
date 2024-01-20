import React, { useEffect, useState } from 'react'
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaStar } from "react-icons/fa6";

import {FcDeleteDatabase} from 'react-icons/fc'
import { toast } from "react-hot-toast";
import { add,remove,addQuantity } from "../redux/Slices/cartSlice";

import { setData } from '../redux/Slices/getProductsSlice';


const SingleProduct = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const dispatch= useDispatch();

  const {getProducts} = useSelector((state)=>state)
  const [post,setPost]= useState(undefined)


  function getPost(){
    const posts= getProducts.posts
    console.log(posts)
    const finalPost = posts.filter((post)=>{
      return post.id === postId
    })
    console.log("getPost")
    console.log(finalPost)
    setPost(finalPost[0]);
  }

  useEffect(()=>{
    getPost()
  },[getProducts])

  const {cart}= useSelector((state)=> state)

  
    function addToCart(){
      dispatch(add({post}))
      toast.success("Item added to Cart")
    }
    function removeFromCart(){
      dispatch(remove(post.id))
      toast.error("Item Removed From Cart")
    }

    const API_URL = "https://fakestoreapi.com/products";
    async function fetchProductData(){
      try {
        const res= await fetch(API_URL);
        const data= await res.json();
        dispatch(setData(data))
        // setPosts(data)
      } catch (error) {
        console.log("error in loading")
      }
    }
    
    useEffect(()=>{
      fetchProductData()
    },[])


  return (
    <div className='min-h-[60vh]' >
      {
        post ? 
        (
          <div className="singleproduct w-[760px] mx-auto cartborder flex flex-col md:flex-row items-center justify-between  gap-3 p-4 mt-10 cartmiddle">
      {/* <div className='flex items-center justify-between'> */}

        <div className="w-[100%]">
          <img src={post.image} className="h-full w-full" />
        </div>

        <div className='singleproduct flex flex-col gap-3 w-[500px] ' >
          <h1 className="text-gray-700 font-semibold text-lg  m-1">
            {post.title}</h1>
            <span className={`w-[50px] text-center px-1 text-sm inline-block pb-1 ${post.rating.rate >= 4 ? 'bg-green-500' : (post.rating.rate >= 3 ? 'bg-yellow-500' : 'bg-red-500')}`}>
              {post.rating.rate} <FaStar className='inline-block' />
            </span>
          <p className=" text-gray-800 font-normal text-[15px] text-left ">
            {post.description}</p>
          <div className='flex justify-between'>
            <p className="text-green-600 font-semibold ">${post.price}</p>
            {
            cart.some((p)=> p.id===post.id) ? 
            (
              <button className=" product-button text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700 transition 
              duration-300 ease-in hover:text-white "
               onClick={removeFromCart}
              >Remove Item</button>
            ):
            (
              <button className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-2 uppercase 
              hover:bg-gray-700 transition 
              duration-300 ease-in hover:text-white " 
               onClick={addToCart}
              >Add to Cart</button>
              )
            }
          </div>
        </div>
    </div>
        ) 
        : (
          <Spinner />
        )
      }
      
    </div>
  )
}

export default SingleProduct
