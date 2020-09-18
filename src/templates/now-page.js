import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import "../scss/now-page.scss";
import HeadLine from "../components/HeadLine";
import { Link, graphql } from "gatsby";
import Test from "../components/Test";

export function NowPageTemplate({ title, description, book, working }) {
  return (
    <Layout>
      <div className="now-container">
        <div className="now-main">
          <HeadLine variant="h1">{title}</HeadLine>
          <Post text={description} />
          <Test reading={book.blurbs} writing={working.blurbs} />
        </div>
      </div>
    </Layout>
  );
}

const NowPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <NowPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
      book={frontmatter.reading}
      working={frontmatter.working}
    />
  );
};

export default NowPage;

export const pageQuery = graphql`
  query NowPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "now-page" } }) {
      frontmatter {
        title
        description
        reading {
          blurbs {
            number
            book
          }
        }
        working {
          blurbs {
            title
            description
          }
        }
      }
    }
  }
`;
