import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };
  
  const removeFromCart = item => {
    setCart(prevCart => prevCart.filter(i => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

