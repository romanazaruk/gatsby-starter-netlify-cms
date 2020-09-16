import React from "react";
import "../scss/index-page.scss";
import RezasPhoto from "../../static/img/rezas-photo.svg";
import Twitter from "../../static/img/twitter-hero.svg";
import Form from "./SubscribeForm";

export default function hero({ title, image, heading }) {
  return (
    <div className="hero-section">
      <div>
        <img src={image} className="rezas-photo" />
      </div>
      <div className="rizas-preview">
        <h1 className="h1-rezas">{title}</h1>
        <p className="about-rezas">{heading}</p>
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
