import React from 'react'
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const [totalAmount,setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=> acc+curr.price,0) )
  },[cart])

  return (
    <div>
    {
      cart.length>0 ? 
      (
        <div className="cart768">
          <div className="m-1">
            {
              cart.map((post,index)=>(
                <CartItem key={post.id} post={post} itemIndex={index} />
              ))
            }
            <NavLink to='/cart/checkout' className='flex'>
              <button className="mx-auto button-65" >Checkout Now</button>  
            </NavLink>
          </div>        
        </div>


      ) : 
      (
        <div className="flex flex-col h-[80vh] justify-center items-center">
          <h1>Your Cart is Empty </h1>
          <NavLink to='/products'>
            <button className="button-65">Shop Now</button>
          </NavLink>
        </div>
      )
    }
  </div>
  )
}

export default Cart
