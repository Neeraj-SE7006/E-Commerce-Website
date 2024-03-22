import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import start_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [size, setsize] = useState('S');
    const notify = () => toast.success(`${product.name} is added to cart`, {
        style: {
            background: 'green',
            color:'white',
            width:'450px'
        }
    });
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           <div className="productdisplay-img-list">
           <img src={product.image} alt="not found!!" />
            <img src={product.image} alt="not found!!" />
            <img src={product.image} alt="not found!!" />
            <img src={product.image} alt="not found!!" />
           </div>

            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="not found!!" />
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={start_icon} alt="not found!!" />
                <img src={start_icon} alt="not found!!" />
                <img src={start_icon} alt="not found!!" />
                <img src={start_icon} alt="not found!!" />
                <img src={star_dull_icon} alt="not found!!" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-discription">
            Experience the ultimate comfort and style with our cosy pajama set. Crafted from soft and breathable fabric, this set is perfect for a restful night’s sleep. The elastic waistband ensures a comfortable fit, and the playful print adds a quirky twist to your nightwear. 
            This pajama set is the perfect sleep buddy for lounging at home or snuggling in bed.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className='defaultSize' onClick={() => {setsize('S')}}>S</div>
                    <div onClick={() => {setsize('M')}}>M</div>
                    <div onClick={() => {setsize('L')}}>L</div>
                    <div onClick={() => {setsize('XL')}}>XL</div>
                    <div onClick={() => {setsize('XXL')}}>XXL</div>
                </div>
            </div>
            <button onClick={evemt => {addToCart(product.id, size); notify();}}>Add To cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay;