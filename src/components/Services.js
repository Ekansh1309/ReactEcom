import React from 'react'
import "../App.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";

const Services = () => {
  return (
      <div className=' my-[5rem] '>
      <div className=' rounded-md mx-auto h-[200px] gap-3 items-center text-sm grid grid-cols-3  max-w-4xl  '>
          <div className='bg-blue-50 rounded-md flex flex-col justify-center items-center  h-full' >
            <TbTruckDelivery className='text-2xl ' />
            <p className='text-center' >Super Fast & Free Delivery</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center  h-full'>
            <div className=' bg-blue-50 rounded-md flex flex-col justify-center items-center  w-full  h-full'>
              <PiContactlessPaymentLight className='text-2xl' />
              <p className='text-center'>Contactless Payment</p>
            </div>
            <div className='bg-blue-50 rounded-md flex flex-col justify-center items-center w-full h-full'>
              <CiMoneyCheck1 className='text-2xl'/>
              <p className='text-center'>100% Money Back Guarantee</p>
            </div>
          </div>
          <div className='bg-blue-50 rounded-md flex flex-col justify-center items-center  h-full'>
            <RiSecurePaymentFill className='text-2xl' />
            <p className='text-center'>Super Secure Payment System</p>
          </div>
      </div>
    </div>
  )
}

export default Services
