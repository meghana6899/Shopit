import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0

    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setcartItems] = useState(getDefaultcart());


    const addTocart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromcart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { all_product, cartItems, addTocart, removeFromcart }


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;