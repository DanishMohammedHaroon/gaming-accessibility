import React, { useState } from "react";
import "./CognitivePage.scss";
import cognitive1 from "../../../src/assets/images/Starfield3.webp";

export default function CognitivePage() {
  const [showAfterAI, setShowAfterAI] = useState(false);

  const toggleText = () => {
    setShowAfterAI(!showAfterAI);
  };

  return (
    <>
      <div className="cognitive__container">
        <img className="cognitive__background-image" src={cognitive1} alt="Starfield Into The Starfield Wallpaper" />
        <div className="overlay">
          <div className="overlay-content">
            <p className={showAfterAI ? "cognitve__narrative--after" : "cognitive__narrative"}>
              {showAfterAI
                ? "Time is breaking. Creatures are attacking. Get out now."
                : "Time anomalies are wreaking havoc in Sector Gamma-9 due to 'The Nexus' artifact. Researchers are experiencing strange aging and memory issues, while local creatures have turned aggressive. Emergency evacuation is underway."}
            </p>
            <button onClick={toggleText}>{showAfterAI ? "Show Before AI" : "Show After AI"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
