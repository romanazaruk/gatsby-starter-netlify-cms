import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../scss/about-page.scss";
import lemons from "../../static/img/about-lemons.svg";
import gallery1 from "../../static/img/gallery-1.svg";
import gallery2 from "../../static/img/gallery-2.svg";
import gallery3 from "../../static/img/gallery-3.svg";
import gallery4 from "../../static/img/gallery-4.svg";
import gallery5 from "../../static/img/gallery-5.svg";
import gallery6 from "../../static/img/gallery-6.svg";

export default function AboutPage() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="container-about">
          <h1 className="about-title">
            Hi, I`m<span className="reza-color"> Reza</span> and here’s
            something
            <span className="about-color"> ABOUT</span> me.
          </h1>
          <img src={lemons} />
          <p className="first-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <a className="link-text">@Duis aute irure dolor</a> in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className="second-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="gallery">
            <img src={gallery1} className="gallery-img" />
            <img src={gallery2} className="gallery-img" />
            <img src={gallery3} className="gallery-img" />
            <img src={gallery4} className="gallery-img" />
            <img src={gallery5} className="gallery-img" />
            <img src={gallery6} className="gallery-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
