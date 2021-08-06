import React from "react";

function LowValueIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={className}
    >
      <path
        id="low_value_ico"
        data-name="low value ico"
        d="M5.828,1.934a5.033,5.033,0,0,0,5-5,5.036,5.036,0,0,0-5-5,5.032,5.032,0,0,0-5,5A5.037,5.037,0,0,0,5.828,1.934Zm0-2.259A.452.452,0,0,1,5.493-.48L3.7-2.28a.4.4,0,0,1-.108-.289.389.389,0,0,1,.4-.4.425.425,0,0,1,.294.119l.645.66.516.619L5.4-2.682v-2.7A.405.405,0,0,1,5.828-5.8a.4.4,0,0,1,.423.413v2.7L6.209-1.563l.521-.629.634-.66a.425.425,0,0,1,.3-.119.393.393,0,0,1,.4.4.409.409,0,0,1-.119.289L6.163-.48A.444.444,0,0,1,5.828-.325Z"
        transform="translate(-0.825 8.066)"
        fill="#fff"
      />
    </svg>
  );
}

export default LowValueIcon;
