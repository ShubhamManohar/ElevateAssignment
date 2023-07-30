import React from 'react'
import './App.css';
const Card = ({price,title,url}) => {
  return (
    
    <div className='card'>
    <div>
      {title}
    </div>
    <div style={{marginTop:"2%"}}>
      <span style={{color:"#f78f64"}}>Price </span>
      ${price}
    </div>
    <div className='cardContainer'>
      
      <img  max-width="30vw" height="100vh"src={url} alt='tile'/>
    </div>
    
  </div>
   
  )
}

export default Card