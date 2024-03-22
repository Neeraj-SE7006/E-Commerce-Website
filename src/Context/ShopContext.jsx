// ShopContextProvider.js
import React, { createContext, useEffect, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length; index++){
        cart[index] = {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0
        };
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    useEffect (()=>{
        console.log(cartItems);
    },[cartItems])

    const addToCart = (itemID, size) => {
        setCartItems(prev => ({
            ...prev,
            [itemID]: {
                ...prev[itemID],
                [size]: prev[itemID][size] + 1
            }
        }));
    }

    const removeFromCart = (itemID, size) => {
        setCartItems(prev => ({
            ...prev,
            [itemID]: {
                ...prev[itemID],
                [size]: prev[itemID][size] - 1
            }
        }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const itemID in cartItems){
            const product = all_product.find((product) => product.id === parseInt(itemID));
            if(product){
                for(const size in cartItems[itemID]){
                    const quantity = cartItems[itemID][size];
                    if(quantity > 0){
                        totalAmount += product.new_price * quantity;
                    }
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for(const itemID in cartItems){
            for(const size in cartItems[itemID]){
                totalItem += cartItems[itemID][size];
            }
        }
        return totalItem;
    }
    const clearCart = () => {
        setCartItems(getDefaultCart());
    }
   
    const contextvalue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem,
        clearCart
    };
    
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
