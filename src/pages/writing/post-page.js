import React from "react";
import Layout from "../../components/Layout";
import PostInfo from "../../components/PostInfo";
import "../../scss/writing-page.scss";
import TwitterImg from "../../../static/img/twitter-postPage.svg";
import ShareSocial from "../../components/ShareSocial";

export default function post() {
  return (
    <Layout>
      <div className="post-page-main-container">
        <div className="post-page-container">
          {/* <PostInfo
            variant="h1"
            title="Smart Small"
            date="10 May 2020"
            time=" 40 min"
            color="green"
            labelTitle="Thoughts"
          /> */}
          <div className="post-page-description">
            <p className="post-page-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.<a> Excepteur sint occaecat</a>cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p className="post-page-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="text-container">
              <div className="text-box">
                <p className="p-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img src={TwitterImg} className="text-box-img" />
            </div>
            <p className="post-page-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <ShareSocial />
        </div>
        {/* <div className="more-posts">
          <p>More Posts</p>
          <PostInfo
            variant="h2"
            title="Smart Small"
            date="10 May 2020"
            time=" 40 min"
            color="purple"
            labelTitle="Random"
          />
          <PostInfo
            variant="h2"
            title="Smart Small"
            date="10 May 2020"
            time=" 40 min"
            color="blue"
            labelTitle="Learning"
          />
          <PostInfo
            variant="h2"
            title="Smart Small"
            date="10 May 2020"
            time=" 40 min"
            color="yellow"
            labelTitle="Writing"
          />
        </div> */}
      </div>
    </Layout>
  );
}
