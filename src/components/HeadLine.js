import React from "react";

const getStyle = (variant) =>
  ({
    h1: {
      fontSize: "30px",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "14px",
    },
  }[variant]);

export default function HeadLine({ variant = "h1", children }) {
  const style = getStyle(variant);

  return <h1 className="headline" style={style}>{children}</h1>;
}
