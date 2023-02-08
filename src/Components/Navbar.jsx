import React from "react";
import { Link } from 'react-scroll'

const Navbar = () => {

  const navItem = [
    "Produce",
    "Prepared Foods",
    "Canned foods and Soups",
    "Produce",
    "Bakery",
    "Diary and Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Diary and Eggs",
    "Prepared Foods",
    "Canned foods and Soups",
    "Produce",
    "Bakery",
    "Diary and Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Produce",
    "Prepared Foods",
    "Canned foods and Soups",
    "Produce",
    "Bakery",
    "Diary and Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Diary and Eggs",
    "Prepared Foods",
    "Canned foods and Soups",
    "Produce",
    "Bakery",
    "Diary and Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery"
  ];



  return (
    <>
      <nav className="side-navbar">
        <ul>
          {navItem.map((item, index) => (
            <li key={index}>
             <Link activeClass="focused" smooth spy offset={-114} to={index + 1}>
                {item}
                </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
