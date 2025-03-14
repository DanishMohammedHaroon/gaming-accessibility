import React from "react";

const DaltonizeImage = ({ src, alt, className }) => {
  return (
    <div>
      <svg width="0" height="0">
        <filter id="daltonize">
          <feColorMatrix
            type="matrix"
            values="
              1.2  -0.2  0    0  0
              -0.2  1.2  0    0  0
              0     0    1.0  0  0
              0     0    0    1  0"
          />
        </filter>
      </svg>
      <img
        src={src}
        alt={alt}
        style={{ filter: "url(#daltonize)" }}
        className={className}
      />
    </div>
  );
};

export default DaltonizeImage;
