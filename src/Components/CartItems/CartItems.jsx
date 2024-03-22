// CartItems.js
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import ClearIcon from '@mui/icons-material/Clear';
import { toast } from 'react-toastify';
import { Context } from '../../Context/AuthContext';
import { Navigate } from "react-router-dom";


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
    const { user } = useContext(Context);
    const notify = () => toast.success(`!Thanks For place the order`, {
        style: {
            background: 'green',
            color:'white'
        }
    });
    const handleProceedToCheckout = () => {
            notify();
            clearCart();

    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((product) => {
                const itemID = product.id;
                const item = cartItems[itemID];
                if (item && Object.values(item).some(quantity => quantity > 0)) {
                    return (
                        <div key={itemID}>
                            {Object.entries(item).map(([size, quantity]) => (
                                quantity > 0 && (
                                    <div key={`${itemID}-${size}`} className="cartitems-format cartitems-format-main">
                                        <img src={product.image} alt="" className='carticon-product-icon' />
                                        <p>{product.name}</p>
                                        <p>${product.new_price}</p>
                                        <button className='cartitems-quantity'>{size}: {quantity}</button>
                                        <p>${product.new_price * quantity}</p>
                                        <button className='cartitems-remove-icon' onClick={() => { removeFromCart(itemID, size) }}><ClearIcon /></button>
                                    </div>
                                )
                            ))}
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>






                    {user?<button onClick={handleProceedToCheckout}>Place Order</button>:<Navigate to="/login" replace/>}
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;
