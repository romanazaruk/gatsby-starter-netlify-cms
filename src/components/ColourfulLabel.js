import React from "react";

const styles = {
  height: "28px",
  borderRadius: "20px",
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "157%",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 15px",
  marginRight: "6px",
};

const getStyles = (color) => {
  return {
    yellow: {
      color: "#C89A0F",
      backgroundColor: "rgba(242, 201, 76, 0.1)",
    },
    green: {
      background: "rgba(111, 207, 151, 0.1)",
      color: "#27AE60",
    },
    blue: {
      background: "rgba(47, 128, 237, 0.1)",
      color: "color: #50A1F3;",
    },
    orange: {
      background: "rgba(237, 93, 47, 0.1)",
      color: "#ED5D2F",
    },
    purple: {
      background: "rgba(187, 107, 217, 0.1)",
      color: "#9B51E0;",
    },
    darkBlue: {
      background: "rgba(107, 131, 217, 0.1)",
      color: "#6B83D9",
    },
    grey: {
      background: "#EBEBF0",
      color: "#555770",
    },
    white: {
      border: "1px solid #8E90A6",
      color: "#8E90A6",
    },
  }[color];
};

export default function Label({ title, color }) {
  return <p style={{ ...styles, ...getStyles(color) }}>{title}</p>;
}
