import {FcDeleteDatabase} from 'react-icons/fc'
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { add,remove,addQuantity } from "../redux/Slices/cartSlice";
import { useState } from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect } from 'react';


const CartItem = ({post}) => {
  const dispatch= useDispatch()
  const id=post.id

  const {cart} = useSelector((state)=>state)

  let [quan,setQuantity] = useState(post.quantity)

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : 10));
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    // Dispatch addQuantity after the state has been updated
    dispatch(addQuantity({ id, quan }));
  }, [dispatch, id, quan]);

  function removeFromCart(){
    dispatch(remove(post.id))
    toast.error("Item Removed")
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
  
  

  return (
    <div className=" w-[500px] cartborder flex items-center justify-between  gap-3 p-4 mt-10 cartmiddle">
      {/* <div className='flex items-center justify-between'> */}

        <div className="w-[60%]">
          <img src={post.image} className="h-full w-full" />
        </div>

        <div>
          <h1 className="cart-title text-gray-700 font-semibold text-lg  m-1">
            {post.title}</h1>
          <p className="cart-desc text-gray-800 font-normal text-[15px] text-left ">
            {post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
          <div className='flex justify-between'>
            <p className=" text-green-600 font-semibold ">${post.price}</p>
            <div className='cart-info text-green-600 font-semibold flex flex-row justify-between gap-4 align-center ' >
              <span>
                <button onClick={()=>decreaseQuantity()} ><FaCircleMinus /></button>
              </span>
              <span className='text-[16px]' >{quan}</span>
              <span  >
                <button onClick={()=>increaseQuantity()}><FaPlusCircle /></button>
              </span>
            </div>
            <div onClick={removeFromCart} className='cursor-pointer'>
              <FcDeleteDatabase className='text-2xl' />
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
