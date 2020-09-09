import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import "../scss/navbar.scss";

export default function Navbar() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="navbar-logo" title="Logo">
          <img src={logo} alt="Rimas" className="rimas-photo" />
        </Link>
        <nav className="nav">
          <Link to="/about" className="link">
            ABOUT
          </Link>
          <Link to="/now" className="link">
            NOW
          </Link>
          <Link to="/writing" className="link">
            WRITING
          </Link>
          <Link to="/books" className="link">
            BOOKSHELF
          </Link>
          <Link to="/outofcrst" className="link">
            OUT OF CURIOSITY
          </Link>
        </nav>
      </header>
    </div>
  );
}
