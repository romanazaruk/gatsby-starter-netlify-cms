import React from "react";
import "../scss/post.scss";

export default function Post({ variant = "h1", title, text }) {
  const getStyle = (variant) =>
    ({
      h1: {
        fontSize: "30px",
      },
      h2: {
        fontSize: "24px",
      },
      h3: {
        fontSize: "14px",
      },
      h4: {
        fontSize: "18px",
      },
    }[variant]);
  const style = getStyle(variant);
  return (
    <div classname="container-post">
      <p style={style} className="post-title">
        {title}
      </p>
      <p className="post-text">{text}</p>
    </div>
  );
}
