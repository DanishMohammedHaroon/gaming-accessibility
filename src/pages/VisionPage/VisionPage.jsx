import "./VisionPage.scss";
import React, { useState } from "react";
import Neuro from "./assets/neuro.jpg"; // Background image
import normalFont from "./assets/normalFont.jpg"; // Base image to be filtered
import Softner from "./Softner"; // Expects props: src, alt
import Daltonization from "./Daltonization"; // Expects props: src, alt
import BlueLightFilter from "./BlueLightFilter"; // Expects children


export default function EffectsPage() {
  // State for toggling effects
  const [isSoft, setIsSoft] = useState(false);
  const [isColorblind, setIsColorblind] = useState(false);
  const [isBlueFilter, setIsBlueFilter] = useState(false);

  // Toggle handlers
  const toggleSoft = () => setIsSoft((prev) => !prev);
  const toggleColorblind = () => setIsColorblind((prev) => !prev);
  const toggleBlueFilter = () => setIsBlueFilter((prev) => !prev);

  // Choose the base filtered image.
  // For Softner and Daltonization, we display one or the other.
  // If both are toggled, Daltonization takes precedence.
  let imageElement = (
    <img className="neuro__normal" src={normalFont} alt="Neuro image" />
  );
  if (isSoft && !isColorblind) {
    imageElement = <Softner src={normalFont} alt="Neuro image - soft" />;
  } else if (isColorblind) {
    imageElement = (
      <Daltonization src={normalFont} alt="Neuro image - daltonized" />
    );
  }

  // Wrap with Blue Light Filter if toggled
  if (isBlueFilter) {
    imageElement = <BlueLightFilter>{imageElement}</BlueLightFilter>;
  }

  return (
    <div className="neuro__container">
      <img
        className="neuro__background-image"
        src={Neuro}
        alt="Starfield Into The Starfield Wallpaper"
      />
      <div className="overlay">
        <div className="overlay-content">
          {/* Render the filtered image */}
          <div>{imageElement}</div>
          {/* Control buttons */}
          <div className="button-group">
            <button onClick={toggleSoft}>
              {isSoft ? "Disable Soft Effect" : "Enable Soft Effect"}
            </button>
            <button onClick={toggleColorblind}>
              {isColorblind
                ? "Disable Colorblind Compensation"
                : "Enable Colorblind Compensation"}
            </button>
            <button onClick={toggleBlueFilter}>
              {isBlueFilter
                ? "Disable Blue Light Filter"
                : "Enable Blue Light Filter"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}