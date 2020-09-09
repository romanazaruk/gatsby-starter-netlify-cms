import React from "react";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import Label from "../../components/ColourfulLabel";
import "../../scss/writing-page.scss";
import PostInfo from "../../components/PostInfo";

export default function index() {
  return (
    <Layout>
      <div className="main-writing">
        <div className="container-writing">
          <div className="writing-blog">
            <Post
              title="BLOG"
              text="This is where I keep all my writing. I also share the latest posts in my weekly newsletter that you can subscribe to here."
            />
          </div>
          <div className="labels">
            <Label title="All" color="white" />
            <Label title="Writing" color="yellow" />
            <Label title="Thoughts" color="grey" />
            <Label title="Education" color="grey" />
            <Label title="Notes" color="orange" />
            <Label title="Random" color="purple" />
          </div>
          <div>
            <PostInfo
              title="Reminder for the day: water+lemon"
              date="10 May 2020"
              time="40 min"
              color="yellow"
            />
            <PostInfo title="Lm- ON #2" date="10 May 2020" time="40 min" />
            <PostInfo
              title="Lemon and health #3"
              date="10 May 2020"
              time="40 min"
            />
            <PostInfo
              title="How to cook lemons with sugar?"
              date="10 May 2020"
              time="40 min"
            />
            <PostInfo title="Lemonology " date="10 May 2020" time="40 min" />
            <PostInfo
              title="Lemon and health #3"
              date="10 May 2020"
              time="40 min"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
