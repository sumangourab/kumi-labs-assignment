import React,{useRef,useState,useEffect} from 'react'

const Navbar = () => {

const navItem = ['Produce','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Diary and Eggs','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Produce','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery','Diary and Eggs','Prepared Foods','Canned foods and Soups','Produce','Bakery','Diary and Eggs','Frozen','Meat & Seafood','Bakery'] 

const navLinks = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("box");

    window.addEventListener("scroll", function() {
      const currentPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= currentPosition &&
          section.offsetTop + section.offsetHeight > currentPosition
        ) {
          setActiveIndex(index);
        }
      });
    });
  }, []);

  return (
    <>
    <aside className="side-navbar">
        <ul ref={navLinks}>

            {navItem.map((item,index) => (
             <li key={index} className={activeIndex === index ? "active" : ""}>
                <a href=" # + {item}">{item}</a>
             </li>
            ))}
          
        </ul>
    </aside>
    </>
  )
}

export default Navbar