import React, { useState } from "react";
import ColourfulLabel from "./ColourfulLabel";
import HeadLine from "./HeadLine";
import "../scss/post-info.scss";

export default function PostInfo({ date, time, gridItems }) {
  const [isHover, setHover] = useState({
    color: "#8E90A6",
  });
  return (
    <div classname="container-postInfo">
      {gridItems.map((item, index) => (
        <div
          className="post-index-page"
          onMouseEnter={() =>
            setHover({
              color: "#50A1F3",
              colorTitle: "#50A1F3",
              index: index,
            })
          }
          onMouseLeave={() =>
            setHover({
              color: "#8E90A6",
              colorTitle: "#555770",
              index: null,
            })
          }
        >
          <HeadLine
            variant="h2"
            color={index === isHover.index ? isHover.color : null}
          >
            {item.title}
          </HeadLine>
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
