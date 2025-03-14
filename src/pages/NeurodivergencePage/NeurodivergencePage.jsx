import React, { useState } from "react";
import "./NeurodivergencePage.scss";
import Neuro from "../../../src/assets/images/Starfield8.jpg";
import normalFont from "../../../src/assets/images/Starfield-Mark-1-Spacesuit-Guide-10-750x422.webp";
import dyslexicFont from "../../../src/assets/images/starfield-accessibility-fonts-mod-open-dyslexic.jpg";
import Header from "../../components/Header/Header";

export default function NeuroDivergencePage() {
  const [showAfterAI, setShowAfterAI] = useState(false);

  const toggleText = () => {
    setShowAfterAI(!showAfterAI);
  };

  return (
    <>
      <Header />
      <div className="neuro__container">
        <img
          className="neuro__background-image"
          src={Neuro}
          alt="Starfield Into The Starfield Wallpaper"
        />
        <div className="overlayneuro">
          <div className="overlayneuro-content">
            <p
              className={
                showAfterAI ? "neuro__narrative--after" : "neuro__narrative"
              }
            >
              {showAfterAI ? (
                <img
                  className="neuro__normal"
                  src={dyslexicFont}
                  alt="Starfield Into The Starfield inventory with normal dyslexic font"
                />
              ) : (
                <img
                  className="neuro__normal"
                  src={normalFont}
                  alt="Starfield Into The Starfield inventory with normal font"
                />
              )}
            </p>
            <button onClick={toggleText}>
              {showAfterAI ? "Show Before AI" : "Show After AI"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
