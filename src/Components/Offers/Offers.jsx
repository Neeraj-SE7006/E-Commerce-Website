import React from 'react';
import './Offers.css';
import hero_image from '../Assets/hero_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={hero_image} alt="Image Not Found!!" />
        </div>
    </div>
  )
}

export default Offers;