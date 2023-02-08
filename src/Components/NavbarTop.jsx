import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import {Link} from "react-scroll";

const NavbarTop = () => {
  const { topNavIcons } = useContext(CartContext);

  return (
    <>
      <nav className="topNav">
        {topNavIcons.map((ele, i) => (
          <div key={i} className="nav-item">
            <Link
              className="nav-top"
              activeClass="focused-top"
              smooth
              spy
              offset={-250}
              to={i + 1}
            >
             <img src={ele.image} alt={ele.Name} />

            </Link>
            <span>{ele.Name}</span>
          </div>
        ))}
      </nav>
    </>
  );
};

export default NavbarTop;
