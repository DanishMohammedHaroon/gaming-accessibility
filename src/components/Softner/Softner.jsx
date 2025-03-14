import React from "react";
import "./Softner.scss";

const SoftImage = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`soft-image ${className || ""}`} />
  );
};

export default SoftImage;
