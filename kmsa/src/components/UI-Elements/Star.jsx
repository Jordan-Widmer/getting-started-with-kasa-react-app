import React from "react";

function Star({ filled, width = 20, height = 20 }) {
  return (
    <span
      style={{
        marginRight: "3px",
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="green"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill={filled ? filled : "#E3E3E3"}
        />
      </svg>
    </span>
  );
}

export default Star;
