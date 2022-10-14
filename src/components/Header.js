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
        <Link to="" className="">
          <img src={logo} alt="error" className="logo" />
        </Link>

        <nav className={showMediaIcons ? "navbar active" : "navbar"}>
          <Link to="home" className=" hover-underline-animation link">
            home
          </Link>
          <Link to="about" className=" hover-underline-animation link">
            About
          </Link>
          <Link to="project" className=" hover-underline-animation link">
            Projects
          </Link>
          <Link to="review" className=" hover-underline-animation link">
            Review
          </Link>
          <Link to="contact" className=" hover-underline-animation link">
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
