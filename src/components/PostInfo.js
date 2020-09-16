import React from "react";
import ColourfulLabel from "./ColourfulLabel";
import HeadLine from "./HeadLine";
import "../scss/post-info.scss";

export default function PostInfo({
  title,
  date,
  time,
  text,
  color,
  labelTitle,
}) {
  return (
    <div classname="container-postInfo">
      <HeadLine variant="h2">{title}</HeadLine>
      <div className="date-label">
        <p className="date-labels-time">
          {date} | {time}
        </p>
        <ColourfulLabel title={labelTitle} className="label" color={color} />
      </div>
      <p className="post-text">{text}</p>
    </div>
  );
}
