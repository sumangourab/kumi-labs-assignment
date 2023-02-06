import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Categories = (props) => {

    const { addToCart, removeFromCart} = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

 

  const [isToggled, setisToggled] = useState([]);
 
  const handleToggle = (index) => {
    const newisToggled = [...isToggled];
    newisToggled[index] = !newisToggled[index];
    setisToggled(newisToggled);
  };



  const handleClick = ( item ) => {
    if (isAdded) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
    setIsAdded(!isAdded);
  };

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

      <div className="Cat">
        <div className="box" id='Produce'>
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
                handleToggle(0)
                handleClick()
            }}>
                {isToggled[0] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./strawberries.svg" alt="banana" />
            <button onClick={() => {
                handleToggle(1)
                handleClick()
                }}>
                {isToggled[1] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Strawberries</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./yogurt.svg" alt="vanana" />
            <button onClick={() => {
                handleToggle(2)
                handleClick()
                }}>
                {isToggled[2] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Yogurt</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./blackberries.svg" alt="vanana" />
            <button onClick={() => {
                handleToggle(3)
                handleClick()
                }}>
                {isToggled[3] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Blackberries</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./strawberries.svg" alt="vanana" />
            <button onClick={() => {
                handleToggle(4)
                handleClick()
                }}>
                {isToggled[4] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Strawberries</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./yogurt.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(5)
              handleClick()
            }}>
                {isToggled[5] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Yogurt</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(6)
              handleClick()
            }}>
                {isToggled[6] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./strawberries.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(7)
              handleClick()
            }}>
                {isToggled[7] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Straeberries</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(8)
              handleClick()
            }}>
                {isToggled[8] ? "-" : "+"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(9)
              handleClick()
            }}>
                {isToggled[9] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(10)
              handleClick()
            }}>
                {isToggled[10] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(11)
              handleClick()
            }}>
                {isToggled[11] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
              handleToggle(12)
              handleClick()
            }}>
                {isToggled[12] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => {
                handleToggle(13)
                handleClick()
                }}>
                {isToggled[13] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(14)}>
                {isToggled[14] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(15)}>
                {isToggled[15] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(16)}>
                {isToggled[16] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(17)}>
                {isToggled[17] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(18)}>
                {isToggled[18] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(19)}>
                {isToggled[20] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(21)}>
                {isToggled[21] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(22)}>
                {isToggled[22] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(23)}>
                {isToggled[23] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(24)}>
                {isToggled[24] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(25)}>
                {isToggled[25] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(26)}>
                {isToggled[26] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(27)}>
                {isToggled[27] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./banana image.svg" alt="vanana" />
            <button onClick={() => handleToggle(28)}>
                {isToggled[28] ? "+" : "-"}
              </button>
          </div>
          <div className="price">$0.69</div>
          <div className="details">Banana 1ct</div>
          <div className="weight">18oz</div>
        </div>
      </div>

      <div className="hr"></div>
    </>
  );
};

export default Categories;
