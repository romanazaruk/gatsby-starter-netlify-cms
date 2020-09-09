import React from "react";
import "../scss/post.scss";

export default function Post({ title, text }) {
  return (
    <div classname="container">
      <p className="post-title">{title}</p>
      <p className="post-text">{text}</p>
    </div>
  );
}
