import React from 'react'
import Header from './Components/Header'
import './App.css'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import { CartProvider } from './CartContext';

const App = () => {

  const navItem = ['Produce','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Diary and Eggs','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Produce','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Diary and Eggs','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery']

  return (
    <CartProvider>
   
<div className='App'>

<Header />
<Navbar />
<Categories title={navItem[0]} />
<Categories title= {navItem[1]} />
<Categories title= {navItem[2]} />
<Categories title= {navItem[3]} />
<Categories title= {navItem[4]} />
<Categories title= {navItem[5]} />
<Categories title= {navItem[6]} />
<Categories title= {navItem[7]} />
<Categories title= {navItem[8]} />
<Categories title= {navItem[9]} />
<Categories title= {navItem[10]} />
<Categories title= {navItem[11]} />
<Categories title= {navItem[12]} />
<Categories title= {navItem[13]} />
<Categories title= {navItem[14]} />
<Categories title= {navItem[15]} />
<Categories title= {navItem[16]} />
<Categories title= {navItem[17]} />
<Categories title= {navItem[18]} />
<Categories title= {navItem[19]} />
<Categories title= {navItem[20]} />
<Categories title= {navItem[21]} />
<Categories title= {navItem[22]} />
<Categories title= {navItem[23]} />
<Categories title= {navItem[24]} />
<Categories title= {navItem[25]} />
<Categories title= {navItem[26]} />
<Categories title= {navItem[27]} />
<Categories title= {navItem[28]} />
<Categories title= {navItem[29]} />
<Categories title= {navItem[30]} />
<Categories title= {navItem[31]} />
<Categories title= {navItem[32]} />
<Categories title= {navItem[33]} />
<Categories title= {navItem[34]} />
<Categories title= {navItem[35]} />

</div>
</CartProvider>

  )
}

export default App