import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../scss/index-page.scss";
import PostInfo from "../components/PostInfo";

export const IndexPageTemplate = ({
  // image,
  // title,
  // heading,
  // subheading,
  // mainpitch,
  // description,
  // intro,
}) => (
  <div className="container">
    <div className="posts">
      <Hero />
      <div className="info-section">
        <h2 className="recent-posts">Recent posts</h2>
        <PostInfo
          title="Binary Outcomes"
          date="10 May 2020"
          time="40min"
          color="yellow"
          labelTitle="Thoughts"
          text="Lacus, ac rutrum eu venenatis risus eget non eget. Tincidunt felis tincidunt tempor lorem. Vitae lacinia pharetra, pharetra ultricies ornare. Enim penatibus arcu, massa dui. Tristique libero interdum etiam enim eget nulla vitae. Mauris id cras sit pretium et tincidunt."
        />
        <PostInfo
          title="Binary Outcomes"
          date="10 May 2020"
          time="40min"
          color="yellow"
          labelTitle="Thoughts"
          text="Lacus, ac rutrum eu venenatis risus eget non eget. Tincidunt felis tincidunt tempor lorem. Vitae lacinia pharetra, pharetra ultricies ornare. Enim penatibus arcu, massa dui. Tristique libero interdum etiam enim eget nulla vitae. Mauris id cras sit pretium et tincidunt."
        />
        <PostInfo
          title="Binary Outcomes"
          date="10 May 2020"
          time="40min"
          color="yellow"
          labelTitle="Thoughts"
          text="Lacus, ac rutrum eu venenatis risus eget non eget. Tincidunt felis tincidunt tempor lorem. Vitae lacinia pharetra, pharetra ultricies ornare. Enim penatibus arcu, massa dui. Tristique libero interdum etiam enim eget nulla vitae. Mauris id cras sit pretium et tincidunt."
        />
        <PostInfo
          title="Binary Outcomes"
          date="10 May 2020"
          time="40min"
          color="purple"
          labelTitle="Thoughts"
          text="Lacus, ac rutrum eu venenatis risus eget non eget. Tincidunt felis tincidunt tempor lorem. Vitae lacinia pharetra, pharetra ultricies ornare. Enim penatibus arcu, massa dui. Tristique libero interdum etiam enim eget nulla vitae. Mauris id cras sit pretium et tincidunt."
        />
        <Link to="/products" className="btn-link">
          <button className="btn-posts">See all posts</button>
        </Link>
      </div>
    </div>
    <p className="footer-info">Reza Saeedi © 2020</p>
  </div>
);
// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// };

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <Navbar />
      <IndexPageTemplate />
    </div>
  );
};
// image={frontmatter.image}
// title={frontmatter.title}
// heading={frontmatter.heading}
// subheading={frontmatter.subheading}
// mainpitch={frontmatter.mainpitch}
// description={frontmatter.description}
// intro={frontmatter.intro}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 4240, quality: 64) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `
