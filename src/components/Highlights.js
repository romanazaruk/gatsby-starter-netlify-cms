import React from "react";
import "../scss/highlights.scss";
import TwitterLogo from "../../static/img/twitter-postPage.svg";

export default function Highlights({ children, style }) {
  return (
    <div className="highlights-container" style={style}>
      <div>{children}</div>
      <img src={TwitterLogo} className="twitter-logo" />
    </div>
  );
}
