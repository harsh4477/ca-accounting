import React from "react";

const BgCompass3 = ({ size = 24, color = "#000", className = "" }) => {
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
        id="Middle_Accents"
        data-name="Middle Accents"
        d="M384,553A169.023,169.023,0,0,1,317.4,228.641a9,9,0,0,1,4.431-10.611l-19.181-52.095A4.893,4.893,0,0,1,302,166a5,5,0,0,1-.59-9.962l5.768-69.212a10,10,0,1,1,1.993.165L303.4,156.2a4.982,4.982,0,0,1,1.135,9.083l19.154,52.024a8.957,8.957,0,0,1,10.575,5.133A169.017,169.017,0,1,1,384,553Zm0-336a166.958,166.958,0,0,0-49.157,7.358,8.993,8.993,0,0,1-16.646,6.115A167.073,167.073,0,1,0,384,217Z"
      />
    </svg>
  );
};

export default BgCompass3;
