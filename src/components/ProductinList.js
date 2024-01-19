import React from 'react'
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove,setItem } from "../redux/Slices/cartSlice";
import { FaStar } from "react-icons/fa6";

const ProductinList = ({post}) => {
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

  return (
    <div className={`relative w-[500px] border-l-2 border-r-2 flex flex-row justify-between mx-auto md:hover:scale-110 md:transition 
      duration-300 ease-in  p-4 mt-10 ml-5 rounded-xl

       `}>
        <div className="w-[150px] h-[170px] ">
          <img src={post.image}  className="h-full w-full"/>
        </div>
        <div className={`px-1 absolute top-7 left-0 inline-block pb-1 ${post.rating.rate >= 4 ? 'bg-green-500' : (post.rating.rate >= 3 ? 'bg-yellow-500' : 'bg-red-500')}`}>
            {post.rating.rate} <FaStar className='inline-block' />
        </div>

        <div className='w-50'>
            <p className="text-gray-700 font-semibold text-lg text-left  mt-1">
              {post.title.split(" ").slice(0,2).join(" ")+"..."}
            </p>
            <p className=" text-gray-400 font-normal text-[10px] text-left ">
              {post.description.split(" ").slice(0,10).join(" ")+"..."}
            </p>

            <div className="flex justify-between items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold " >${post.price}</p>
          </div>
          {
            cart.some((p)=> p.id===post.id) ? 
            (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700 transition 
              duration-300 ease-in hover:text-white "
               onClick={removeFromCart}
              >Remove Item</button>
            ):
            (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase 
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
}

export default ProductinList
