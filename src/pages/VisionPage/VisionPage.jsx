import "./VisionPage.scss";
import React, { useState } from "react";
import StarField from "/images-logos/starfield-2550-x-1138-background-25p3mym8n5bnvdlq.jpg"; // Background image
import imageEdit from "/images-logos/Starfield-Review-Featured-Games.webp"; // Base image to be filtered
import Softner from "../../components/Softner/Softner"; // Expects props: src, alt
import Daltonization from "../../components/Daltonization/Daltonization"; // Expects props: src, alt
import BlueLightFilter from "../../components/BlueLightFilter/BlueLightFilter"; // Expects children


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
    <img
      className="vision__normal"
      src={imageEdit}
      alt="Vision image"
    />
  );
  if (isSoft && !isColorblind) {
    imageElement = <Softner className="vision__normal" src={imageEdit} alt="Vision image - soft" />;
  } else if (isColorblind) {
    imageElement = (
      <Daltonization
        className="vision__normal"
        src={imageEdit}
        alt="Vision image - daltonized"
      />
    );
  }

  // Wrap with Blue Light Filter if toggled
  if (isBlueFilter) {
    imageElement = <BlueLightFilter>{imageElement}</BlueLightFilter>;
  }

  return (
    <div className="vision__container">
      <img
        className="vision__background"
        src={StarField}
        alt="Starfield Wallpaper"
      />
      <div className="overlay">
        <div className="overlay__content">
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