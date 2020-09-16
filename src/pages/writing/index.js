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
            <Label title="All" color="white" className="label-writing" />
            <Label title="Writing" color="yellow" className="label-writing" />
            <Label title="Notes" color="grey" className="label-writing" />
            <Label title="Education" color="grey" className="label-writing" />
            <Label title="Thoughts" color="orange" className="label-writing" />
            <Label title="Random" color="purple" className="label-writing" />
          </div>
          <div className="postsInfo-writing">
            <PostInfo
              variant="h2"
              title="Reminder for the day: water+lemon"
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
            <PostInfo
              title="Lm- ON #2"
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
            <PostInfo
              title="Lemon and health #3"
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
            <PostInfo
              title="How to cook lemons with sugar?"
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
            <PostInfo
              title="Lemonology "
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
            <PostInfo
              title="Lemon and health #3"
              date="10 May 2020"
              time="40 min"
              color="yellow"
              labelTitle="Thoughts"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
