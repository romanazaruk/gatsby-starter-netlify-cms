import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../scss/index-page.scss";
import PostInfo from "../components/PostInfo";

export const IndexPageTemplate = ({ image, title, heading, intro }) => (
  <div className="container">
    <div className="posts">
      <Hero title={title} heading={heading} image={image} />
      <div className="info-section">
        <h2 className="recent-posts">Recent posts</h2>
        <PostInfo date="22 May 2020" time="40min" posts={intro} />
        <Link to="/products" className="btn-link">
          <button className="btn-posts">See all posts</button>
        </Link>
      </div>
    </div>
    <p className="footer-info">Reza Saeedi © 2020</p>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <Navbar />
      <IndexPageTemplate
        image={frontmatter.image.publicURL}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro.blurbs}
      />
    </div>
  );
};
// mainpitch={frontmatter.mainpitch}
// description={frontmatter.description}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          publicURL
        }
        heading
        intro {
          blurbs {
            title
            label
            labelColor
            post
          }
        }
      }
    }
  }
`;
