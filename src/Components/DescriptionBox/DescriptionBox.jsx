import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptiobox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
       <p>E-commerce is the buying and selling of goods or services over the internet. 
        It has become an increasingly popular way to shop, as it is convenient and 
        often cheaper than traditional brick-and-mortar stores. 
        E-commerce also offers a wider selection of goods and services than most physical stores. </p>

        <p>
            E-commerce website typically display the product, service and detailed description, images, sizes, prices (e.g size, color) and any
            avaialble variety of products
        </p>
        </div>
    </div>
  )
}

export default DescriptionBox