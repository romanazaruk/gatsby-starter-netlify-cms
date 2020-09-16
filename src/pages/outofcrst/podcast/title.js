import React from "react";
import Layout from "../../../components/Layout";
import "../../../scss/outofcrst.scss";
import HeadLine from "../../../components/HeadLine";
import NewsletterPost from "../../../components/NewsletterPost";
import lemonImg from "../../../../static/img/lemonPost.svg";
import ShareSocial from "../../../components/ShareSocial";

export default function title() {
  return (
    <Layout>
      <div className="podcast-title-container-main">
        <div className="podcast-title-description">
          <HeadLine variant="h1">Kugi Podcast #18</HeadLine>
          <p className="podcast-title-date-p">10 MAY 2020</p>
          <iframe
            src="https://share.transistor.fm/e/1493e91f/dark"
            width="100%"
            height="180"
            frameborder="0"
            scrolling="no"
            seamless="true"
            title="gdfljngk"
            className="iframe"
          ></iframe>
          <HeadLine variant="h1">ON STARTING UP</HeadLine>
          <p className="podcast-title-p">
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
          <HeadLine variant="h1">HELL YES OR NO</HeadLine>
          <p className="podcast-title-p">
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
        <div className="podcast-social">
          <ShareSocial />
        </div>
        <div className="podcast-title-posts-container">
          <div className="podcast-list-container">
            <HeadLine variant="h3">LATEST EPISODES</HeadLine>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
