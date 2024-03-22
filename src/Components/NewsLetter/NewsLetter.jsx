import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFER ON EMAIL</h1>
        <p>Subscribe to our newsletter and stay Updated!!</p>
        <div>
        <input type='email' placeholder='Enter your Emailid here..' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter