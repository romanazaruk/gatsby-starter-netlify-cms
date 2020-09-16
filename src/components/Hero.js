import React from "react";
import "../scss/index-page.scss";
import RezasPhoto from "../../static/img/rezas-photo.svg";
import Twitter from "../../static/img/twitter-hero.svg";
import Form from "./SubscribeForm";

export default function hero() {
  return (
    <div className="hero-section">
      <div>
        <img src={RezasPhoto} className="rezas-photo" />
      </div>
      <div className="rizas-preview">
        <h1 className="h1-rezas">Hi, I'm Reza 👋</h1>
        <p className="about-rezas">
          I'm a writer and marketing leader based in Toronto, Canada. <br />I
          think and write about startups, personal growth and storytelling. See
          what I'm up to right now, or check out my latest posts.
        </p>
        <div className="link-section">
          <button className="btn-start">Start here</button>
          <img src={Twitter} className="twitter-btn" />
        </div>
        <p className="p-join">
          Join 1,000+ other curious minds who get my newsletter every week: A
          concise review of 5 ideas to help get 1% better every day.
        </p>
        <Form />
      </div>
    </div>
  );
}
