import React from 'react'
import "../App.css";
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    const {cart} = useSelector((state)=>state)
    const [totalAmount,setTotalAmount] = useState(0)

    useEffect(()=>{
      setTotalAmount( cart.reduce((acc,curr)=> acc + (curr.price * curr.quantity),0) )
    },[cart])
    
  return (
    <div>

      <div className="min-h-[80vh] flex flex-col justify-around m-1 items-center ">
            <div>
              <div className="text-green-700 font-semibold " >Your Cart</div>
              <div className="text-green-700 text-5xl font-semibold ">SUMMARY</div>
              <p className="text-gray-700 font-semibold text-lg  mt-3">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div class="cart-container">
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>

      {
        cart.map((item)=>{
          return item.quantity>0 ?  (<CheckoutProduct item={item}/>) :(null)
        })
      }
      
    </tbody>
  </table>
</div>


            <div>
              <p className="text-gray-700 font-semibold text-lg  mt-3">Total Amount:
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
              </p>

              <NavLink to='/cart/checkout/placeorder' className='flex justify-center'>
                <button className="button-65">Place Order</button>
              </NavLink>
            </div>

          </div>
    </div>
  )
}

export default Checkout
