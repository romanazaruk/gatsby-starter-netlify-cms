import React from "react";
import { Tweet } from "react-twitter-widgets";
import Layout from "../../components/Layout";
import HeadLine from "../../components/HeadLine";
import Form from "../../components/SubscribeForm";
import NewsletterPost from "../../components/NewsletterPost";
import lemonImg from "../../../static/img/lemonPost.svg";
import Navbar from "../../components/Navbar";
import "../../scss/outofcrst.scss";

export default function newsletter() {
  return (
    <div>
      <Navbar />
      <div className="newsletter-container-main">
        <div className="newsletter-container">
          <HeadLine variant="h1">The First Newsletter. Welcome!</HeadLine>
          <div className="newsletter-description">
            <p className="newsletter-description-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="newsletter-description-footer">
            <p className="p-join">
              Join 1,000+ other curious minds who get my newsletter every week:
              A concise review of 5 ideas to help get 1% better every day.
            </p>
            <Form />
          </div>
          <div className="twitter-container">
            <HeadLine variant="h3">WHAT OTHERS ARE SAYING </HeadLine>
            <div className="twitter-post">
              <Tweet tweetId="841418541026877441" />
              <Tweet tweetId="1302993160600252417" />
            </div>
          </div>
          <div className="newsletter-posts-info">
            <HeadLine variant="h3">PAST ISSUES </HeadLine>
            <div className="newsletter-posts">
              <NewsletterPost
                img={lemonImg}
                title="The best time to start"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <NewsletterPost
                img={lemonImg}
                title="The best time to start"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <NewsletterPost
                img={lemonImg}
                title="The best time to start"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <NewsletterPost
                img={lemonImg}
                title="The best time to start"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            </div>
            <div className="books-btn-more-container">
              <button className="books-btn-more">More</button>
            </div>
          </div>
        </div>
        <div className="footer-newsletter">
          <p className="footer-info">Reza Saeedi © 2020</p>
        </div>
      </div>
    </div>
  );
}
