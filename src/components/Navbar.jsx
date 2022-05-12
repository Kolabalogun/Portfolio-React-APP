import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, clickF] = React.useState(true);
  const [showNav, showNavF] = React.useState(true);

  function navClick(params) {
    clickF((prevState) => !prevState);
  }

  const showMenuBtn = () => {
    if (window.innerWidth > 960) {
      showNavF(true);
    } else {
      showNavF(false);
    }
  };

  React.useEffect(() => {
    showMenuBtn();
  }, []);

  window.addEventListener("resize", showMenuBtn);

  const imgIcon = {
    display: showNav ? "none" : "flex",
  };
  const navv = {
    display: showNav ? "flex" : "none",
  };
  const menu = {
    display: click ? "none" : "block",
  };
  const black = {
    color: "black",
  };

  return (
    <nav className="top-bar">
      <a href="/" className="logo">
        Ibrahim Dev
      </a>

      <ul style={navv}>
        <li>
          <a href="index.html" className="nav-text">
            Home
          </a>
        </li>
        <li>
          <a href="#about-section" className="nav-text">
            About
          </a>
        </li>
        <li>
          <a href="#porfolio-section" className="nav-text">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact" className="nav-text">
            Contact
          </a>
        </li>
      </ul>

      <img
        style={imgIcon}
        src={
          click ? "img/svg/bars-solid.svg" : "img/svg/share-square-regular.svg"
        }
        alt="icon"
        className="menu"
        onClick={navClick}
      />

      <aside style={menu}>
        <a style={black} onClick = {navClick} href="index.html" className="nav-text-sidebar top">
          Home
        </a>
        <a style={black} onClick = {navClick} href="#about-section" className="nav-text-sidebar">
          About
        </a>
        <a style={black} onClick = {navClick} href="#porfolio-section" className="nav-text-sidebar">
          Portfolio
        </a>
        <a style={black} onClick = {navClick} href="#Contact" className="nav-text-sidebar">
          Contact
        </a>
      </aside>
    </nav>
  );
};

export default Navbar;
