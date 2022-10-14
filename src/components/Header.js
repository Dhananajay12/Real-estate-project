import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../image/logo.jpg";
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <section className="header ">
        <Link to="home" className="">
          <img src={logo} alt="error" className="logo" />
        </Link>

        <nav className={showMediaIcons ? "navbar active" : "navbar"}>
          <Link to="home" className="link">
            home
          </Link>
          <Link to="about" className="link">
            About
          </Link>
          <Link to="package" className="link">
            Projects
          </Link>
          <Link to="book" className="link">
            Book
          </Link>
          <Link to="book" className="link">
            Contact
          </Link>

          <AiOutlineClose
            className="display  mx-3"
            onClick={() => setShowMediaIcons(false)}
          />
        </nav>
        <div className="hamburger-menu mt-1">
          <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="icons" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
