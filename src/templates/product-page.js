import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import "../scss/now-page.scss";
import HeadLine from "../components/HeadLine";

export default function NowPage() {
  return (
    <Layout>
      <div className="now-container">
        <div className="now-main">
          <HeadLine variant="h1">NOW</HeadLine>
          <Post  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <div classname="container">
            <h2>What I`m Reading</h2>
            <p className="post-text">
              <span className="span-number">01. </span>A Brief History of Time
            </p>
            <p className="post-text">
              <span className="span-number">02. </span>A Brief History of Time
            </p>
            <p className="post-text">
              <span className="span-number">03. </span>A Brief History of Time
            </p>
          </div>
          <HeadLine variant="h2">WHAT I`M WORKING ON</HeadLine>
          <Post text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
    </Layout>
  );
}
