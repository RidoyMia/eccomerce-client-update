"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner(props) {
    // const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-container grid grid-cols-2 lg:h-[500px] md:h-[400px] h-[300px] bg-red-200 px-2 lg:px-32  md:px-20'>
               <div>
                <img className='w-80 lg:w-full md:w-full lg:h-[500px] md:h-[400px] h-[300px] ' src="https://i.postimg.cc/TPzRTFt8/sunglass-Banner-removebg-preview.png" alt="" />
               </div>
               <div>
                 <div className='text-right pt-20'>
                    <h1 className='text-sm lg:text-xl md:text-xl  pb-3 font-semibold text-red-600'>New Exclusive</h1>
                    <h1 className='text-sm md:text-3xl lg:text-3xl pb-3   font-semibold '>FOR HER</h1>
                    <h1 className=' text-[27px] md:text-[35px] lg:text-[55px] pb-8 font-bold  relative '>SUNGLASS </h1>
                    <button className='px-8 lg:px-32 md:px-20 py-2 lg:py-4 md:py-3 bg-green-600 text-white rounded-sm font-semibold text-white'>Shop now</button>
                 </div>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-2 lg:h-[500px] md:h-[400px] h-[300px] bg-red-200 px-2 lg:px-32  md:px-20'>
        <div>
                 <div className='text-left pt-16 lg:pt-28 md:pt-20'>
                    <h1 className='text-sm lg:text-xl md:text-xl   font-semibold text-red-600'>Our Exclusive</h1>
                    <h1 className='text-sm md:text-3xl lg:text-5xl py-6   font-semibold '>Adidas Campus</h1>
                    <p className='pb-7 font-[400]'>We have all your auto parts needs! <span className='hidden lg:block md:block'> are you looking for best performance car pats and car accessories</span></p>
                    <button className='px-8 lg:px-32 md:px-20 py-2 lg:py-4 md:py-3 bg-green-600  rounded-sm font-semibold text-white'>Shop now</button>
                 </div>
               </div>
               <div>
                <img className='w-80 lg:w-full md:w-full lg:h-[500px] md:h-[400px] h-[300px] ' src="https://i.postimg.cc/0NMkRPdd/red-shoe-min-1-1-removebg-preview.png" alt="" />
               </div>
               
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-2 lg:h-[500px] md:h-[400px] h-[300px] bg-red-200 px-2 lg:px-32  md:px-20'>
        <div>
                 <div className='text-left pt-16 lg:pt-28 md:pt-20'>
                    <h1 className='text-sm lg:text-xl md:text-xl   font-semibold text-red-600'>Our Exclusive</h1>
                    <h1 className='text-sm md:text-3xl lg:text-5xl py-6   font-semibold '>Arong Bazar</h1>
                    <p className='pb-7 font-[400]'>We have all your auto parts needs! <span className='hidden lg:block md:block'> are you looking for best performance car pats and car accessories</span></p>
                    <button className='px-8 lg:px-32 md:px-20 py-2 lg:py-4 md:py-3 bg-green-600  rounded-sm font-semibold text-white'>Shop now</button>
                 </div>
               </div>
               <div>
                <img className='w-80 lg:w-full md:w-full lg:h-[500px] md:h-[400px] h-[300px] ' src="https://i.postimg.cc/yd07xjGD/Suite-removebg-preview.png" alt="" />
               </div>
               
            </div>
        </SwiperSlide>
        
       
        <div className="autoplay-progress" slot="container-end">
         
          <span className='hidden' ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
}

export default Banner;