import React from "react";

const BlueLightFilter = ({ children }) => {
  return (
    <div style={{ filter: "url(#blueLightFilter)" }}>
      {/* SVG definition for the blue light filter */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="blueLightFilter">
          {/* 
              This matrix reduces the blue channel intensity.
              The third row controls blue (set here to 0.8 times the original).
              Adjust these values to fine-tune the blue light reduction.
          */}
          <feColorMatrix
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 0.8 0 0
              0 0 0 1 0
            "
          />
        </filter>
      </svg>
      {children}
    </div>
  );
};

export default BlueLightFilter;
