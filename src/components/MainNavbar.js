import React, { useEffect } from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import toast from 'react-hot-toast';

const MainNavbar = () => {
    const {cart}= useSelector((state)=>state)
    const { loginWithRedirect , logout ,isAuthenticated,user } = useAuth0();

    function authen(){
        if(isAuthenticated === true) {
            toast.success("Logged In");
            setTimeout(() => {
                const displayName = user.name ? user.name : user.nickname;
                toast.success(`Hello ${displayName}`);
              }, 3000); 
        }
    }

    useEffect(()=>{
        authen()
    },[isAuthenticated])

  return (
    <div class="mainnavbar ">
        <nav className="flex bg-slate-900 justify-evenly items-center py-2 md:px-20 md:justify-between  mx-auto ">
            <NavLink to="/">
                <div className='ml-2' >
                    <img src={logo} alt='img' className='h-12 md:h-14' />
                </div>
            </NavLink>

                

            <div className=' mainbar  gap-16 flex flex-row justify-between '>
            
            {

            isAuthenticated ? 
            (
                <NavLink to='#'>
                    <button className='text-white'
                    onClick={() => {
                        logout({ logoutParams: { returnTo: window.location.origin } })
                            toast.success("Logged Out");
                        }}>
                        Log Out
                    </button>
                </NavLink>
            ) 
            :
            (
                <NavLink to='#'>
                    <button className='text-white'
                    onClick={() => {
                         loginWithRedirect()
                         
                        }}>Log In
                    </button>
                </NavLink>
            )

            }

                <NavLink to='/cart'>
                        <FaShoppingCart className='text-2xl text-slate-100 inline-block  ' /> 
                    <span className='relative'>
                        {
                            cart.length>0 &&
                            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                        justify-center items-center animate-bounce rounded-full text-white '
                        >{cart.length}</span>
                        }
                    </span>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default MainNavbar
