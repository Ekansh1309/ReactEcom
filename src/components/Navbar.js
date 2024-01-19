import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6";

const Navbar = (props) => {
  return (
    <div>
        <div className="wrapper">
        <input type="checkbox" id="btn" hidden/>
        <label for="btn" className="bg-slate-900 menu-btn">
          <div className='flex flex-col gap-1' >
            <div className='w-[20px] bg-green-500 h-[2px]' ></div>
            <div className='w-[20px] bg-green-500 h-[2px]'></div>
            <div className='w-[20px] bg-green-500 h-[2px]'></div>
          </div>
            <i className=" fas fa-bars"></i>
            <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar"
        className='z-40'
        >
            <div className=" bg-slate-900 title"  >
              <img src='https://ecomzy-shopping-cart.vercel.app/logo.png' alt='none'  />
            </div>
            <ul className="bg-slate-800 list-items">

            <li>
              <NavLink to='/'>
                <i className="fas fa-home"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/products'>
                <i className="fas fa-sliders-h"></i>Products
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>
                <i className="fas fa-address-book"></i>About Us
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'>
                <i className="fas fa-cog"></i>Contact Us
              </NavLink>
            </li>

            <div className="icons">
                <NavLink to='https://www.facebook.com/ekansh.sharma.568' className='social ' >
                    <FaFacebook className='text-xl' />
                </NavLink>
                <NavLink to='https://www.instagram.com/ekansh1309/' className='social '>
                    <FaInstagram className='text-xl' />
                </NavLink>
                <NavLink to='https://twitter.com/Ekansh1309' className='social '>
                    <FaTwitter className='text-xl' />
                </NavLink>
                <NavLink to='https://www.youtube.com/' className='social '>
                    <FaYoutube className='text-xl' />
                </NavLink>
            </div>
            </ul>
        </nav>
        </div>
        
    </div>
  )
}

export default Navbar
