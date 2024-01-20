import "../App.css";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove,setItem } from "../redux/Slices/cartSlice";
import { FaStar } from "react-icons/fa6";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import React from 'react'
import { loadCategory } from "../redux/Slices/productSlice";

const CategoryProduct = ({post}) => {
    const dispatch= useDispatch()

    function onClickHandler(category){
      dispatch(loadCategory(category))
    }
    return (  // w-[300px]
      <NavLink to='/products' onClick={()=>onClickHandler(post.category)} 
       className="cursor-pointer relative border-l-2 border-r-2 w-[250px] postshadow flex flex-col items-center justify-between md:hover:scale-110 md:transition 
      duration-300 ease-in gap-3 py-4 px-2 mt-10 ml-5 rounded-xl
       ">
        <div className=" text-lg font-medium tracking-wider text-green-600 ">
          {post.category.toUpperCase()}
        </div>
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
              {post.title}
          </p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
              {post.description.split(" ").slice(0,10).join(" ")+"..."}
          </p>
        </div>
        {/* 180 */}
        <div className="h-[130px]">
          <img src={post.image}  className="h-full w-full"/>
        </div>

      </NavLink>
      
    )
}

export default CategoryProduct
