import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
         
          <h2 style={{fontSize:"30px",fontWeight:"800"}} >
           Home Properties
          </h2>
        </div>
        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>

          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/About'>About</a>
            </li>
            <li>
              <a href='/Blog'>Blog</a>
            </li>
            <li>
              <a href='/Contact'>Contact</a>
            </li>

          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

        
      </nav>

    </div>
  )
}

export default Navbar
