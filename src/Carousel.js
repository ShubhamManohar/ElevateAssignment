import React from 'react'
import { Carousel } from 'antd';
import './App.css';

export const Carouseel = () => {
  return (
    <div>
        
    <Carousel autoplay fade>
    <div>
      
        <div className='carouselContainer container1'>
         
        </div>
    </div>
    <div>
      <div className='carouselContainer container2'></div>
    </div>
    <div>
      <div className='carouselContainer container3'></div>
    </div>
   
  </Carousel>
    </div>
  )
}
