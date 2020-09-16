import React from "react";
import Layout from "../../components/Layout";
import "../../scss/outofcrst.scss";
import HeadLine from "../../components/HeadLine";
import NewsletterPost from "../../components/NewsletterPost";
import lemonImg from "../../../static/img/lemonPost.svg";

export default function podcast() {
  return (
    <Layout>
      <div className="podcast-container-main">
        <div className="podcast-container">
          <HeadLine variant="h1">PODCAST</HeadLine>
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
            <div className="books-btn-more-container">
              <button className="books-btn-more">More</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
