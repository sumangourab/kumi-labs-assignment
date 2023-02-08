import React from 'react'
import Header from './Components/Header'
import './App.css'
import { CartProvider } from './CartContext';
import Home from './Components/Home'

const App = () => {

 

  return (
    <CartProvider>
   
<div className='App'>

<Header />
<Home />


</div>
</CartProvider>

  )
}

export default App