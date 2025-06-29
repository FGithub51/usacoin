import { React, useState } from "react";
import Logo from "/logo.png";
import "../styles/index.navbar.css";

const Navbar = () => {

  return (
    <nav>
      <a className="cryptoweblogo" href="/">
        <div className="nav-logo">
          <img src={Logo} />
        </div>
        <div className="logo-title">USACOIN NEWS</div>
      </a>

      <div className="nav-desktop">
        <ul className="nav-links">
          <li className="link">
            <a href="/">Home</a>
          </li>

         <li id="link2" className="link">
            <a href="#pricing">News</a>
          </li>

          <li id="link2" className="link">
            <a href="#pricing">Roadmap</a>
          </li>
          <li id="link3" className="link">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <button>
        <a href="https://t.me/fwow12" className="nav-btn">
         BUY NOW
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
