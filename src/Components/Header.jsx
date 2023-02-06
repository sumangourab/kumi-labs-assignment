import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {


    const { cart } = useContext(CartContext);
  return (
    <>
    <div className='header'>

<div className="logo-text">
    <h1>E-Commerce</h1>
</div>

<div className="cart">
    <AiOutlineShoppingCart className='cart-icon' />
    <span>{cart.length}</span>
</div>

    </div>
    </>
  )
}

export default Header