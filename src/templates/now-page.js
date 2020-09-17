import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import "../scss/now-page.scss";
import HeadLine from "../components/HeadLine";
import { Link, graphql } from "gatsby";

export function NowPageTemplate({ title, description, books, workings }) {
  let reading = books.blurbs;
  let writing = workings.blurbs;
  return (
    <Layout>
      <div className="now-container">
        <div className="now-main">
          <HeadLine variant="h1">{title}</HeadLine>
          <Post text={description} />
          <div classname="container">
            <h2>What I`m Reading</h2>
            {reading.map((item) => (
              <div>
                <p className="post-text">
                  <span className="span-number">{item.number} </span>
                  {item.book}
                </p>
              </div>
            ))}
          </div>
          {writing.map((item) => (
            <div>
              <HeadLine variant="h2">{item.title}</HeadLine>
              <Post text={item.description} />
            </div>
          ))}
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
      books={frontmatter.reading}
      workings={frontmatter.working}
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
