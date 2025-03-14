import "./GeneralPage.scss";
import React, { useState } from "react";
import StarField from "../../assets/images-logos/HD-wallpaper-starfield.jpg"; // Background image
import imageEdit from "../../assets/images-logos/Starfield-Review-Featured-Games.webp"; // Base image to be filtered
import Softner from "../../components/Softner/Softner";
import Daltonization from "../../components/Daltonization/Daltonization";
import BlueLightFilter from "../../components/BlueLightFilter/BlueLightFilter";


export default function EffectsPage() {
  // State for toggling effects
  const [isSoft, setIsSoft] = useState(false);
  const [isColorblind, setIsColorblind] = useState(false);
  const [isBlueFilter, setIsBlueFilter] = useState(false);

  // Toggle handlers
  const toggleSoft = () => setIsSoft((prev) => !prev);
  const toggleColorblind = () => setIsColorblind((prev) => !prev);
  const toggleBlueFilter = () => setIsBlueFilter((prev) => !prev);


  let imageElement = (
    <img className="general__normal" src={imageEdit} alt="general image" />
  );
  if (isSoft && !isColorblind) {
    imageElement = (
      <Softner
        className="general__normal"
        src={imageEdit}
        alt="general image - soft"
      />
    );
  } else if (isColorblind) {
    imageElement = (
      <Daltonization
        className="general__normal"
        src={imageEdit}
        alt="general image - daltonized"
      />
    );
  }

  // Wrap with Blue Light Filter if toggled
  if (isBlueFilter) {
    imageElement = <BlueLightFilter>{imageElement}</BlueLightFilter>;
  }

  return (
    <div className="general__container">
      <div className="general__container">
        <img
          className="general__background"
          src={StarField}
          alt="Starfield Wallpaper"
        />
      </div>
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