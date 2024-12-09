import React from 'react'
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ScrollImages.module.css"
const ScrollImages = () => {
   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };

  return (
    <div className={`h-[70vh] w-[95%]   ml-10`}>
         <center className='text-5xl font-bold mb-8  font-poppins'>Choose your luxurious room</center>
    <Slider {...settings} className=''>
      <div className='focus:outline-none h-[300px] w-[430px]'><img className=' ml-3 h-[300px] w-[430px] rounded-[1rem]' src="/pic1.avif" alt="pic1" /></div>
      <div className='focus:outline-none h-[300px] w-[430px] '><img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic3.avif" alt="pic3" /></div>
      <div className='focus:outline-none h-[300px] w-[430px] '><img className='ml-3  h-[300px] w-[420px] rounded-[1rem] ' src="/pic2.avif" alt="pic2" /></div>
     <div className='focus:outline-none h-[300px] w-[430px] '> <img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic4.avif" alt="pic4" /></div>
      <div className='focus:outline-none h-[300px] w-[430px] '><img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic5.avif" alt="pic5" /></div>
      <div className='focus:outline-none h-[300px] w-[430px] '><img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic6.avif" alt="pic6" /></div>
     <div className='focus:outline-none h-[300px] w-[430px] '> <img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic7.avif" alt="pic7" /></div>
     <div className='focus:outline-none h-[300px] w-[430px] '> <img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic8.avif" alt="pic8" /></div>
      <div className='focus:outline-none h-[300px] w-[430px] '><img className='ml-3  h-[300px] w-[430px] rounded-[1rem] ' src="/pic9.avif" alt="pic9" /></div>
      </Slider>
    
  </div>
  )
}

export default ScrollImages
