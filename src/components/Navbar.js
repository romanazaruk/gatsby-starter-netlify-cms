import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import "../scss/navbar.scss";
import icrss from "../img/social/ic-rss.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";
import MenuIcon from "../../static/img/menu-icon.svg";
import BurgerQuit from "../../static/img/burger-quit.svg";
import { set } from "lodash";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenBurger, setOpenBurger] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
    toggleBurger();
  }
  function toggleBurger() {
    setOpenBurger((prev) => !prev);
  }
  const navClasses = isOpen ? "nav open" : "nav ";
  const burgerClasses = isOpenBurger ? "header-menu open" : "header-menu ";

  return (
    <div className="container">
      <header className="header">
        <div className={burgerClasses}>
          <Link to="/" className="navbar-logo" title="Logo">
            <img src={logo} alt="Rimas" className="rimas-photo" />
          </Link>
          <img
            src={MenuIcon}
            alt="Menu icon"
            onClick={toggleMenu}
            className="burger"
          />
          <img
            src={BurgerQuit}
            alt="Menu icon"
            onClick={toggleMenu}
            className="burger-quit"
          />
        </div>
        <nav className={navClasses}>
          <ul className="navbar-ul">
            <Link to="/about" className="link" activeClassName="active">
              ABOUT
            </Link>
            <Link to="/now" className="link" activeClassName="active">
              NOW
            </Link>
            <Link to="/writing" className="link" activeClassName="active">
              WRITING
            </Link>
            <Link to="/books" className="link" activeClassName="active">
              BOOKSHELF
            </Link>
            <Link to="/outofcrst" className="link" activeClassName="active">
              OUT OF CURIOSITY
            </Link>
            <div className="header-social-logo">
              <ul>
                <Link>
                  <img src={twitter} />
                </Link>
                <Link>
                  <img src={linkedin} />
                </Link>
                <Link>
                  <img src={icrss} />
                </Link>
              </ul>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}
