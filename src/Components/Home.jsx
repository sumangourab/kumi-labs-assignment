import React, { useState, useEffect } from "react";
import NavbarTop from "./NavbarTop";
import Navbar from "./Navbar";
import Categories from "./Categories";

const Home = () => {
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
    "Bakery",
  ];

  const topNavItem = [
    "Produce",
    "Sweets",
    "Bakery",
    "Canned",
    "Diary",
    "Produce",
    "Sweets",
    "Bakery",
    "Canned",
    "Diary",
    "Produce",
    "Sweets",
    "Bakery",
    "Canned",
    "Diary",
    "Produce",
    "Sweets",
    "Bakery",
    "Canned",
    "Diary",
  ];

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <>
          <Navbar />
          <div>
            <section id="1">
            <Categories title={navItem[0]} key="1" />
           </section>

            <section id="2">
            <Categories title={navItem[1]} key="2" />
            </section>

            <section id="3">
            <Categories title={navItem[2]} key="3" />
            </section>

            <section id="4">
            <Categories title={navItem[3]} key="4" />
            </section>

            <section id="5">
            <Categories title={navItem[4]} key="5" />
            </section>
            <section id="6">
            <Categories title={navItem[5]} key="6" />
            </section>
            <section id="7">
            <Categories title={navItem[6]} key="7" />
            </section>
            <section id="8">
            <Categories title={navItem[7]} key="8" />
            </section>
            <section id="9">
            <Categories title={navItem[8]} key="9" />
            </section>
            <section id="10">
            <Categories title={navItem[9]} key="10" />
            </section>
            <section id="11">
            <Categories title={navItem[10]} key="11" />
            </section>
            <section id="12">
            <Categories title={navItem[11]} key="12" />
            </section>
            <section id="13">
            <Categories title={navItem[12]} key="13" />
            </section>
            <section id="14">
            <Categories title={navItem[13]} key="14" />
            </section>
            <section id="15">
            <Categories title={navItem[14]} key="15" />
            </section>
            <section id="16">
            <Categories title={navItem[15]} key="16" />
            </section>
            <section id="17">
            <Categories title={navItem[16]} key="17" />
            </section>
            <section id="18">
            <Categories title={navItem[17]} key="18" />
            </section>
            <section id="19">
            <Categories title={navItem[18]} key="19" />
            </section>
            <section id="20">
            <Categories title={navItem[19]} key="20" />
            </section>
            <section id="21">
            <Categories title={navItem[20]} key="21" />
            </section>
            <section id="22">
            <Categories title={navItem[21]} key="22" />
            </section>
            <section id="23">
            <Categories title={navItem[22]} key="23" />
            </section>
            <section id="24">
            <Categories title={navItem[23]} key="24" />
            </section>
            <section id="25">
            <Categories title={navItem[24]} key="25" />
            </section>
            <section id="26">
            <Categories title={navItem[25]} key="26" />
            </section>
            <section id="27">
            <Categories title={navItem[26]} key="27" />
            </section>
            <section id="28">
            <Categories title={navItem[27]} key="28" />
            </section>
            <section id="29">
            <Categories title={navItem[28]} key="29" />
            </section>
            <section id="30">
            <Categories title={navItem[29]} key="30" />
            </section>
            <section id="31">
            <Categories title={navItem[30]} key="31" />
            </section>
            <section id="32">
            <Categories title={navItem[31]} key="32" />
            </section>
            <section id="33">
            <Categories title={navItem[32]} key="33" />
            </section>
            <section id="34">
            <Categories title={navItem[33]} key="34" />
            </section>
            <section id="35">
            <Categories title={navItem[34]} key="35" />
            </section>
            <section id="36">
            <Categories title={navItem[35]} key="36" />
            </section>
          </div>
        </>
      ) : (
        <>
          <NavbarTop />
          <div>
          <section id="1">
            <Categories title={navItem[0]} key="1" />
            </section>

            <section id="2">
            <Categories title={topNavItem[1]} key="2" />
            </section>

            <section id="3">
            <Categories title={topNavItem[2]} key="3" />
            </section>

            <section id="4">
            <Categories title={topNavItem[3]} key="4" />
            </section>

            <section id="5">
            <Categories title={topNavItem[4]} key="5" />
            </section>

            <section id="6">
            <Categories title={topNavItem[5]} key="6" />
            </section>

            <section id="7">
            <Categories title={topNavItem[6]} key="7" />
            </section>

            <section id="8">
            <Categories title={topNavItem[7]} key="8" />
            </section>

            <section id="9">
            <Categories title={topNavItem[8]} key="9" />
            </section>

            <section id="10">
            <Categories title={topNavItem[9]} key="10" />
            </section>

            <section id="11">
            <Categories title={topNavItem[10]} key="11" />
            </section>

            <section id="12">
            <Categories title={topNavItem[11]} key="12" />
            </section>

            <section id="13">
            <Categories title={topNavItem[12]} key="13" />
            </section>

            <section id="14">
            <Categories title={topNavItem[13]} key="14" />
            </section>

            <section id="15">
            <Categories title={topNavItem[14]} key="15" />
            </section>

            <section id="16">
            <Categories title={topNavItem[15]} key="16" />
            </section>

            <section id="17">
            <Categories title={topNavItem[16]} key="17" />
            </section>

            <section id="18">
            <Categories title={topNavItem[17]} key="18" />
            </section>

            <section id="19">
            <Categories title={topNavItem[18]} key="19" />
            </section>

            <section id="20">
            <Categories title={topNavItem[19]} key="20" />
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
