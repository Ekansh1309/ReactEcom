import React from 'react'
import { useState, useEffect } from 'react'
import men from '../banners/men11.jpg'
import phone from '../banners/phones.jpg'
import women from '../banners/womeninsaare.jpg'
import flip from '../banners/flipkartimage.jpg'
import TopProducts from './TopProducts'
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom,Slide} from 'react-slideshow-image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '300px'
  }

  const slideImages = [
    {
      url: men,
    },
    {
      url: 'https://memofashion.com/cdn/shop/files/DOTCOM_1800x791_SHOP_WOMEN_S_d974dc54-5b19-452b-9723-b6b9f26f6e8a_1810x.jpg?v=1702954261'
    },
    {
      url: flip,
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/Mobile_Header_ClearanceStore.jpg',
    },
    {
      url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dfde0732450955.56836244623ab.jpg',
    }
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
          // dots:false,
        }
      },
    ]

  };
  // responsive mai slides to show ko 1 karna hai, varirable width false karni hai, container ko width deni hai
    
  return (
    <div>

    <div className='overflow-hidden'>
      <Slider className='container-width mx-auto '  {...settings}>
        {
          slideImages.map((image)=>
          <div className='image-container px-[20px]' >
            <img className='banner rounded'  src={image.url} />
          </div>
          )
        }
      </Slider>
    </div>

      <TopProducts/>

    </div>
  );
};

export default Home
