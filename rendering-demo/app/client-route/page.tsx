"use client";
// import {serverSideFunction} from "@/utils/server-utils"; //This serverSideFunction is not run in client side

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ImageSlider.css';

import { useTheme } from '@/components/theme-provider';

export default function ClientRoutePage() {
    // const result=serverSideFunction();

    const theme=useTheme()
    const settings = {
    dots: true,
  };

    return(
        <>
        {/* <h1>Client Route Page {result}</h1> */}
        <h1 style={{color:theme.colors.primary}}>Client Route Page</h1>
        <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
        </>
    
)
}