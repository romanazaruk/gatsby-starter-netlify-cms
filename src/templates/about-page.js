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
import { Link, graphql } from "gatsby";

// const fixUrl = (url) => "/" + url.replaceAll("../", "");

export function AboutPageTemplate({
  imageabout,
  titleabout,
  body,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  console.log(image1, image2, image3, image4, image5, image6);
  return (
    <div className="container">
      <Navbar />
      <div className="container-about">
        <h1 className="about-title">{titleabout}</h1>
        <img src={imageabout} className="img-about-title" />
        {/* <p className="first-text">{body}</p> */}
        <div className="gallery">
          <img src={image1} className="gallery-img" />
          <img src={image2} className="gallery-img" />
          <img src={image3} className="gallery-img" />
          <img src={image4} className="gallery-img" />
          <img src={image5} className="gallery-img" />
          <img src={image6} className="gallery-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      titleabout={frontmatter.titleabout}
      imageabout={frontmatter.imageabout.publicURL}
      // body={frontmatter.body}
      image1={frontmatter.image1.image.publicURL}
      image2={frontmatter.image2.image.publicURL}
      image3={frontmatter.image3.image.publicURL}
      image4={frontmatter.image4.image.publicURL}
      image5={frontmatter.image5.image.publicURL}
      image6={frontmatter.image6.image.publicURL}
    />
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        titleabout
        body
        imageabout {
          publicURL
        }
        image1 {
          image {
            publicURL
          }
        }
        image2 {
          image {
            publicURL
          }
        }
        image3 {
          image {
            publicURL
          }
        }
        image4 {
          image {
            publicURL
          }
        }
        image5 {
          image {
            publicURL
          }
        }
        image6 {
          image {
            publicURL
          }
        }
      }
    }
  }
`;
