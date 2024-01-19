import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      const { loginWithRedirect , logout ,isAuthenticated, } = useAuth0();

    function authen(){
        if(isAuthenticated === true) {
            // toast.success("Logged In");
        }
    }

    useEffect(()=>{
        authen()
    },[isAuthenticated])

  return (
    <div className=' bg-slate-900'>
      <div className= 'mt-[5rem] max-w-xl mx-auto h-[30vh]  bg-slate-900 text-white relative flex flex-col items-center justify-evenly' >
        <div className=' absolute -top-10 p-2 border-4 border-slate-900 text-black bg-slate-100 w-[300px] md:w-[400px] flex flex-col justify-center items-center '>
            <p className='text-xs ' >See Personalized Recommendations</p>
                            {

                isAuthenticated ? 
                (
                    <NavLink to='#'>
                        <button className='text-sm text-black'
                        onClick={() => {
                            logout({ logoutParams: { returnTo: window.location.origin } })
                                // toast.success("Logged Out");
                            }}>
                            Log Out
                        </button>
                    </NavLink>
                ) 
                :
                (
                    <NavLink to='#'>
                        <button className='text-sm text-black'
                        onClick={() => {
                            loginWithRedirect()
                            
                            }}>Log In
                        </button>
                    </NavLink>
                )

                }
            <p className='text-[10px]'>New customer? <NavLink to='#' >Start here</NavLink> </p>
        </div>
        {/* <hr/> */}
        <div>
            <NavLink className='text-center text50' onClick={handleScrollToTop}>
                Move to Top
            </NavLink>
        </div>

        <div className='p-2 w-full justify-between flex flex-row gap-12'>
            <div className='text-sm'>
                <p  >Ecomzy</p>
                <p>hello world</p>
            </div>
            <div >
                <p className='text-sm'>Follow us</p>
                <div className=' flex flex-row justify-between' >
                    <NavLink to='https://www.facebook.com/ekansh.sharma.568'>
                        <FaFacebook />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/ekansh1309/'>
                        <FaInstagram  />
                    </NavLink>
                    <NavLink to='https://twitter.com/Ekansh1309'>
                        <FaTwitter />
                    </NavLink>
                </div>
            </div>
            <div className='text-sm'>
                <p>Call us</p>
                <p>+91 1234567890</p>
            </div>
        </div>

      </div>

      <div>
        <div className= ' text-sm text-white p-2 w-full  justify-center flex flex-row gap-48'>
            <div>
                <p>@2023 Ecomzy. All Rights Reserved</p>
            </div>
            <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer
