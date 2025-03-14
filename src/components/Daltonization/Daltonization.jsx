import React from "react";

const DaltonizeImage = ({ src, alt }) => {
  return (
    <div>
      {/* Define the SVG filter */}
      <svg width="0" height="0">
        <filter id="daltonize">
          {/* 
            This matrix is an example starting point.
            Adjust the values to shift colors in a way that may be easier to distinguish.
            Here we’re slightly boosting red-green separation.
          */}
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

      {/* Apply the filter to the image */}
      <img src={src} alt={alt} style={{ filter: "url(#daltonize)" }} />
    </div>
  );
};

export default DaltonizeImage;
