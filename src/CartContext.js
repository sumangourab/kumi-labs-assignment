import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider({ children }) {

  const [product, setProduct] = useState([
    {
      "id": 1, 
      "Name": "Banana 1 ct",
      "ImageLink": "./banana.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "18 oz",
    },
    {
      "id": 2,
      "Name": "Strawberries",
      "ImageLink": "./strawberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 3,
      "Name": "Yogurt",
      "ImageLink": "./yogurt.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 4,
      "Name": "Blackberries",
      "ImageLink": "./blackberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 5,
      "Name": "Strawberries",
      "ImageLink": "./strawberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 6,
      "Name": "Yogurt",
      "ImageLink": "./yogurt.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 7,
      "Name": "Banana 1 ct",
      "ImageLink": "./banana.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "18 oz",
    },
    {
      "id": 9,
      "Name": "Strawberries",
      "ImageLink": "./strawberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 10,
      "Name": "Yogurt",
      "ImageLink": "./yogurt.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 11,
      "Name": "Blackberries",
      "ImageLink": "./blackberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 12,
      "Name": "Strawberries",
      "ImageLink": "./strawberries.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 13,
      "Name": "Yogurt",
      "ImageLink": "./yogurt.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "1 lb",
    },
    {
      "id": 14,
      "Name": "Banana 1 ct",
      "ImageLink": "./banana.svg",
      "cost": 0.69,
      "Category": "Produce",
      "Weight": "18 oz",
    },
    
  ]);




  const topNavIcons = [
    {
      "id": "1",
      "Name": "Produce",
    "image": "./produce.svg"
  },
  {
    "id": "2",
    "Name": "Sweets",
    "image": "./sweets.svg"
  },
  {
    "id": "3",
    "Name": "Bakery",
    "image": "./bakery.svg"
  },
  {
    "id": "4",
    "Name": "Diary",
    "image": "./diary.svg"
  },
  {
    "id": "5",
    "Name": "Frozen",
    "image": "./frozen.svg"
  },
  {
    "id": "6",
    "Name": "Produce",
  "image": "./produce.svg"
},
{
  "id": "7",
  "Name": "Sweets",
  "image": "./sweets.svg"
},
{
  "id": "8",
  "Name": "Bakery",
  "image": "./bakery.svg"
},
{
  "id": "9",
  "Name": "Diary",
  "image": "./diary.svg"
},
{
  "id": "10",
  "Name": "Frozen",
  "image": "./frozen.svg"
},
{
  "id": "11",
  "Name": "Produce",
"image": "./produce.svg"
},
{
  "id": "12",
"Name": "Sweets",
"image": "./sweets.svg"
},
{
  "id": "13",
"Name": "Bakery",
"image": "./bakery.svg"
},
{
  "id": "14",
"Name": "Diary",
"image": "./diary.svg"
},
{
  "id": "15",
"Name": "Frozen",
"image": "./frozen.svg"
},
  ]

  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };
  
  const removeFromCart = item => {
    setCart(prevCart => prevCart.filter(i => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, product, setProduct,topNavIcons }}>
      {children}
    </CartContext.Provider>
  );
}

