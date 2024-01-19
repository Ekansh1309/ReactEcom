import React from 'react'
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove,setItem } from "../redux/Slices/cartSlice";
import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Product = ({post}) => {
    const {cart}= useSelector((state)=> state)
    const dispatch= useDispatch()

  
    function addToCart(){
      dispatch(add({post}))
      toast.success("Item added to Cart")
    }
    function removeFromCart(){
      dispatch(remove(post.id))
      toast.error("Item Removed From Cart")
    }

    useEffect(() => {
      try {
        // Ensure cart is not empty
        if (cart && cart.length > 0) {
          localStorage.setItem("EcomCart", JSON.stringify(cart));
          // console.log("Cart data saved to local storage:", cart);
        } else {
          console.warn("Cart is empty. Local storage not updated.");
        }
      } catch (error) {
        console.error("Error saving cart data to local storage:", error);
      }
    }, [cart]);
    
    return (  // w-[250px]

      <div className="product relative border-l-2 border-r-2 w-[250px] postshadow flex flex-col items-center justify-between md:hover:scale-110 md:transition 
      duration-300 ease-in md:gap-3 gap-1 py-4 px-2 mt-10 ml-5 rounded-xl
       ">

        <div className={`px-1 text-sm absolute top-0 left-0 inline-block pb-1 ${post.rating.rate >= 4 ? 'bg-green-500' : (post.rating.rate >= 3 ? 'bg-yellow-500' : 'bg-red-500')}`}>
          {post.rating.rate} <FaStar className='inline-block' />
        </div>
        <div>
          <p className="product-title text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
              {post.title}
          </p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
              {post.description.split(" ").slice(0,10).join(" ")+"..."}
          </p>
        </div>
        {/* 180 */}
        <NavLink to={{
    pathname: `/products/singleproduct/${post.id}`,
    state: { postObject: post.id }
  }}
         className="product_image h-[130px]">
          <img src={post.image}  className="h-full w-full"/>
        </NavLink>
  
        <div className=" cart-button flex justify-between gap-12 items-center w-full mt-5">
          <div>
            <p className="product-price text-green-600 font-semibold " >${post.price}</p>
          </div>
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
      
    )
}

export default Product
