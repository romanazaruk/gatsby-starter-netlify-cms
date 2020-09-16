import React from "react";
import ColourfulLabel from "./ColourfulLabel";
import HeadLine from "./HeadLine";
import "../scss/post-info.scss";

export default function PostInfo({ date, time, posts }) {
  return (
    <div classname="container-postInfo">
      {posts.map((post) => (
        <div>
          <HeadLine variant="h2">{post.title}</HeadLine>
          <div className="date-label">
            <p className="date-labels-time">
              {date} | {time}
            </p>
            <ColourfulLabel
              title={post.label}
              className="label"
              color={post.labelColor}
            />
          </div>
          <p className="post-text">{post.text}</p>
        </div>
      ))}
    </div>
  );
}
