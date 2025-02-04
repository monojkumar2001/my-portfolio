import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };
  AOS.init();
  return (
    <>
      <header className="header-mobile" id="home">
        <div className="nav-left">
          <Link to="/">
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>{" "}
          </Link>
        </div>
        <button className="hum-btn" onClick={_toggleSidebar} id="burger-menu">
          <img
            src={`images/${menuActive ? "x" : "burger-menu"}.svg`}
            alt="Menu"
          />{" "}
        </button>

        <nav id="mobile-nav" className={`${menuActive ? "hidden" : ""} `}>
          <HashLink to="/">
            <a
              onClick={_toggleSidebar}
              href="/"
              className="active-nav nav-link mobile-link"
            >
              Home{" "}
            </a>
          </HashLink>

          <HashLink to="/#about">
            <a
              onClick={_toggleSidebar}
              href="#about"
              className="nav-link mobile-link"
            >
              About
            </a>
          </HashLink>
          <HashLink to="/#skill">
            <a
              onClick={_toggleSidebar}
              href="#skill"
              className="nav-link mobile-link"
            >
              Skill
            </a>
          </HashLink>
          <HashLink to="/#projects">
            <a
              onClick={_toggleSidebar}
              href="#projects"
              className="nav-link mobile-link"
            >
              Projects
            </a>
          </HashLink>
          <HashLink to="/#contact">
            <a
              onClick={_toggleSidebar}
              href="#contact"
              className="nav-link mobile-link"
            >
              Contact Me
            </a>
          </HashLink>

          <div className="header-link-mobile">
            <div className="social-mob">
              <a
                href="https://www.facebook.com/monojkumar202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/facebook.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/monojkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/linkedin.png" alt="" />
              </a>
              <a
                href="https://wa.me/8801757859893"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/whatsapp.png" alt="" />
              </a>
            </div>
          </div>
          <button className="join-discord-btn-nav">
            <a
              href="./images/monoj.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/join-discord-btn-mobile.png" alt="" />
            </a>
          </button>
        </nav>
      </header>

      <header>
        <div className="nav-left">
          <Link to="/">
            {" "}
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>{" "}
          </Link>
        </div>
        <div className="nav-right"></div>
      </header>
    </>
  );
}

export default Header;
