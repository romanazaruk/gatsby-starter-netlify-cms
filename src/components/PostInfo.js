import React from "react";
import ColourfulLabel from "./ColourfulLabel";
import HeadLine from "./HeadLine";
import "../scss/post-info.scss";

export default function PostInfo({ date, time, gridItems }) {
  return (
    <div classname="container-postInfo">
      {gridItems.map((item) => (
        <div>
          <HeadLine variant="h2">{item.title}</HeadLine>
          <div className="date-label">
            <p className="date-labels-time">
              {date} | {time}
            </p>
            <ColourfulLabel
              title={item.label}
              className="label"
              color={item.labelColor}
            />
          </div>
          <p className="post-text">{item.post}</p>
        </div>
      ))}
    </div>
  );
}
