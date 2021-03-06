import React from "react";
import Layout from "../../components/Layout";
import HeadLine from "../../components/HeadLine";
import AmazonImg from "../../../static/img/amazonImg.svg";
import Label from "../../components/ColourfulLabel";
import FullStar from "../../../static/img/full-star.svg";
import PartStar from "../../../static/img/part-star.svg";
import EmptyStar from "../../../static/img/empty-star.svg";
import ShareSocial from "../../components/ShareSocial";
import "../../scss/books-page.scss";
import img1 from "../../../static/img/book3.svg";
import img2 from "../../../static/img/book4.svg";
import img3 from "../../../static/img/book5.svg";
import img4 from "../../../static/img/book6.svg";
import Slides from "../../components/Slides";
import { Link } from "gatsby";

function RatingBar({ rating }) {
  let currentRate = rating;

  const renderStar = () => {
    currentRate--;

    const rate = currentRate + 1;

    if (rate > 0.8) {
      return <img src={FullStar} className="star" />;
    }

    return rate > 0.4 ? (
      <img src={PartStar} className="star" />
    ) : (
      <img src={EmptyStar} className="star" />
    );
  };

  return (
    <div className="rating-stars">
      {renderStar()}
      {renderStar()}
      {renderStar()}
      {renderStar()}
      {renderStar()}
    </div>
  );
}

export default function title() {
  return (
    <Layout>
      <div className="books-title-post">
        <div className="books-title-head">
          <HeadLine variant="h1">A Brief History of Time</HeadLine>
          <img src={AmazonImg} className="books-amazon-link" />
        </div>
        <p className="books-title-author">Stephen W. Hawking</p>
        <div className="books-title-rating-container">
          <RatingBar rating={0.5} />
          <p style={{ margin: "2px" }}>|</p>
          <Label color="purple" title="THOUGHTS" />
        </div>
        <div className="books-title-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="books-title-social">
        <ShareSocial />
      </div>
      <div className="highlights-container-main">
        <HeadLine variant="h3">HIGHLIGHTS</HeadLine>

        <Slides />
      </div>
      <div className="photos-container-main">
        <HeadLine variant="h3">BOOK REVIEW YOU MAY LIKE </HeadLine>
        <div className="book-title-photos">
          <Link>
            <img src={img1} className="book-img" />
          </Link>
          <Link>
            <img src={img2} className="book-img" />
          </Link>
          <Link>
            <img src={img3} className="book-img" />
          </Link>
          <Link>
            <img src={img4} className="book-img" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
