import React from 'react'

const Buttons = ({ count, setCount, icon, setIcon }) => {

    function handleClick() {
        if (icon === '+') {
          setCount(count + 1);
          setIcon('-');
        } else {
          setCount(count - 1);
          setIcon('+');
        }
    }
  return (
    <button onClick={handleClick}>
      {icon}
    </button>
  )
}

export default Buttons