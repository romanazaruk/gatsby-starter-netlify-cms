import React from "react";
import "../../src/scss/headline.scss";

export default function HeadLine({ variant = "h1", children, color }) {
  const getStyle = (variant) =>
    ({
      h1: {
        fontSize: "30px",
        color: color,
      },
      h2: {
        fontSize: "24px",
        color: color,
      },
      h3: {
        fontSize: "14px",
        color: color,
      },
    }[variant]);
  const style = getStyle(variant);

  return (
    <h1 className="headline" style={style}>
      {children}
    </h1>
  );
}
