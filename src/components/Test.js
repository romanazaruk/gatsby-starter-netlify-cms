import React from "react";

import Post from "../components/Post";
import "../scss/now-page.scss";
import HeadLine from "../components/HeadLine";

export default function Test({ reading, writing }) {
  console.log(reading);
  return (
    <div>
      <div classname="container">
        <h2>What I`m Reading</h2>
        {reading.map((item) => (
          <div>
            <p className="post-text">
              <span className="span-number">{item.number} </span>
              {item.book}
            </p>
          </div>
        ))}
      </div>
      {writing.map((item) => (
        <div>
          <HeadLine variant="h2">{item.title}</HeadLine>
          <Post text={item.description} />
        </div>
      ))}
    </div>
  );
}
