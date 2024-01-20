import React from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom'
import frame from '../banners/frame.jpg'
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const About = () => {
  return (
  <div>

   
    <div className='flex flex-row max-w-4xl h-[400px]  items-between  justify-center mx-auto mt-20 gap-4'>
      <div className='px-1 flex flex-col justify-center gap-2 '>
        <h1>
            <span className='font-medium text-lg'>Welcome To</span> <br/>
            <span className='font-medium text-6xl text-green-600 tracking-wider font-serif ' > ECOMZY</span>
        </h1>
        <p className='text-sm '>Your one-stop destination for seamless online shopping. Discover a world of convenience, quality products, and unbeatable deals. Shop smart with Ecomzy today!</p>
        <div>
            <img src='https://d1ixo36kppfedg.cloudfront.net/images/myshopprime/trust-strip.png' 
            className='w-[400px]' alt='image' />
        </div>
        <NavLink to='/products'>
        <div className="button ml-2 ">
            <a href="#"><span>Shop Now!</span></a>
        </div>
        </NavLink>
      </div>
      
       <div className='about-image mt-[50px] max-w-[400px]'>
            <div className=' relative '>
                <img src={frame} alt="Pattern"
                className='relative'
                loading="lazy" />
                <img src='https://resource.chemlinked.com.cn/food/articles/daxue-chinese-western-habit-family-shopping.jpeg' alt="Pattern"
                loading="lazy" 
                className='absolute top-4 right-4 ' 
                />
            </div>
        </div>

    </div>

    {/*Services section */}
    <Services/>
    <h1 className='mt-5 text-center font-bold text-2xl' >Trusted By</h1>
    <Trusted/>


    </div>   
  )
}

export default About
