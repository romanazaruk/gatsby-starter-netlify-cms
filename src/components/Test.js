import React from "react";
import "../scss/now-page.scss";

export default function Test({ reading }) {
  return (
    <div classname="test-container">
      <h2 className="test-title">What I`m Reading</h2>
      {reading.blurbs.map((item) => (
        <div>
          <p className="now-post">
            <span className="span-number">{item.number} </span>
            {item.book}
          </p>
        </div>
      ))}
    </div>
  );
}
