import React from "react";

const BgCompass2 = ({ size = 24, color = "#000", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill={color}
      viewBox="0 0 768 768"
    >
      <path
        id="Needle"
        d="M414.28,410.183L273.357,517.329l80.129-158.181L494.409,252Zm-26.848-45.714a19.844,19.844,0,1,0,16.112,22.979A19.844,19.844,0,0,0,387.432,364.469Z"
      />
    </svg>
  );
};

export default BgCompass2;
