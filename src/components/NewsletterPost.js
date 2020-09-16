import React from "react";
import "../scss/NewsletterPost.scss";
import Headline from "../components/HeadLine";

export default function NewsletterPost({ img, title, text }) {
  return (
    <div className="newsletterPost-container">
      <img src={img}  className="post-img"/>
      <Headline variant="h2">{title}</Headline>
      <p className="post-p">{text}</p>
    </div>
  );
}
