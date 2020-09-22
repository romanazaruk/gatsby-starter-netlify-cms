import React from "react";
import NextImg from "../../static/img/next.svg";
import PreviousImg from "../../static/img/previous.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Highlights from "../components/Highlights";
import "../scss/slider.scss";
import { Link } from "gatsby";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? <img src={NextImg} /> : <img src={PreviousImg} />;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export default function App() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <Link to="/" className="link-post">
        <div className="highlights-posts">
          <div className="highlights-left">
            <Highlights>
              <div className="highlights-text">
                <p> The universe doesn't allow perfection. {num}</p>
              </div>
            </Highlights>
          </div>
        </div>
      </Link>
    ));

  return (
    <div className="slider-container">
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        className="slider"
      >
        {renderSlides()}
      </Slider>
      <div className="slides-responsive">{renderSlides()}</div>
    </div>
  );
}
