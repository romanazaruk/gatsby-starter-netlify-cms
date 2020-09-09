import React from "react";
import icrss from "../img/social/ic-rss.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";
import "../scss/footer.scss";
import SubscribeForm from "../components/SubscribeForm";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer-description">
        <p className="footer-para">
          Join 1,000+ other curious minds who get my newsletter every week:
          <br /> A concise review of 5 ideas to help get 1% better everyday.
        </p>
      </div>
      <div className="footer-media">
        <SubscribeForm />
        <div className="footer-social-logo">
          <ul>
            <li>
              <img src={twitter} className="footer-img" />
            </li>
            <li>
              <img src={linkedin} className="footer-img" />
            </li>
            <li>
              <img src={icrss} className="footer-img" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="footer-sign">Reza Saeedi © 2020</p>
      </div>
    </div>
  );
}
