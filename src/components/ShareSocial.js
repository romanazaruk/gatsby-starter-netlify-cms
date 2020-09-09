import React from "react";
import TwitterLogo from "../../static/img/twitter-postPage.svg";
import LinkedinLogo from "../../static/img/linkedin-postPage.svg";
import "../scss/share-social.scss";

export default function ShareSocial() {
  return (
    <div>
      <p className="share-social-title">Share</p>
      <div>
        <img src={TwitterLogo} />
        <img src={LinkedinLogo} className="share-social-logo"/>
      </div>
    </div>
  );
}
