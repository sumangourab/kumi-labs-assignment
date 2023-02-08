import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Categories = (props) => {
  const { cart, addToCart, removeFromCart, product } = useContext(CartContext);

  const [buttonStates, setButtonStates] = useState({});

  function handleClick(element, index) {
    if (cart.includes(element) && buttonStates[index] === '-') {
      removeFromCart(element);
      setButtonStates({ ...buttonStates, [index]: '+' });
    } else {
      addToCart(element);
      setButtonStates({ ...buttonStates, [index]: '-' });
    }
  }
  
  

  return (
    <>
      <div className="title">
        <div className="text">
          <h2>{props.title} </h2>
        </div>
        <div className="icon">
          <img src="./icon gt.svg" alt="" />
        </div>
      </div>

      <div className="Cat" id={props.key}>
        {product.map((element, index) => (
          <div className="box">
            <div className="img">
              <img src={element.ImageLink} alt={element.Name} />
              <button onClick={() => handleClick(element, index)}>{buttonStates[index] || '+'}</button>
            </div>
            <div className="price">$ {element.cost}</div>
            <div className="details">{element.Name}</div>
            <div className="weight">{element.weight}</div>
          </div>
        ))}
      </div>

      <div className="hr"></div>
    </>
  );
};

export default Categories;


