import React from "react";
import "../scss/newsletterPost.scss";
import Headline from "../components/HeadLine";
import { Link } from "gatsby";

export default function NewsletterPost({ img, title, text }) {
  return (
    <div className="newsletterPost-container">
      <Link className="newsletter-link">
        <img src={img} className="post-img" />
        <Headline variant="h2">{title}</Headline>
      </Link>
      <p className="post-p">{text}</p>
    </div>
  );
}
