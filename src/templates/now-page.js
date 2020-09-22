import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import "../scss/now-page.scss";
import { Link, graphql } from "gatsby";
import Test from "../components/Test";

export function NowPageTemplate({
  title,
  description,
  book,
  workingTitle,
  workingDescription,
}) {
  return (
    <Layout>
        <div className="now-main">
          <Post title={title} text={description} />
          <Test reading={book} />
          <Post title={workingTitle} text={workingDescription} />
        </div>
    </Layout>
  );
}

const NowPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <NowPageTemplate
      title={frontmatter.titleNow}
      description={frontmatter.descriptionNow}
      book={frontmatter.reading}
      workingTitle={frontmatter.titleWorking}
      workingDescription={frontmatter.descriptionWorking}
    />
  );
};

export default NowPage;

export const pageQuery = graphql`
  query NowPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "now-page" } }) {
      frontmatter {
        titleNow
        descriptionNow
        reading {
          blurbs {
            number
            book
          }
        }
        titleWorking
        descriptionWorking
      }
    }
  }
`;
