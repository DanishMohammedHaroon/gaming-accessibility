import React, { useState } from "react";
import "./CognitivePage.scss";
import cognitive1 from "../../../src/assets/images/Starfield3.webp";

export default function CognitivePage() {
  const [showAfterAI, setShowAfterAI] = useState(false);

  const beforeAIText =
    "Time anomalies are wreaking havoc in Sector Gamma-9 due to 'The Nexus' artifact. Researchers are experiencing strange aging and memory issues, while local creatures have turned aggressive. Emergency evacuation is underway.";
  const afterAIText = " Time is breaking. Creatures are attacking. Get out now.";

  const toggleText = () => {
    setShowAfterAI(!showAfterAI);
  };

  return (
    <>
      <div className="cognitive__container">
        <img className="cognitive__background-image" src={cognitive1} alt="Starfield Into The Starfield Wallpaper" />
        <div className="overlay">
          <div className="overlay-content">
            <p className={`cognitive__narrative ${showAfterAI ? "after-ai" : "before-ai"}`}>
              {showAfterAI ? afterAIText : beforeAIText}
            </p>
            <button onClick={toggleText}>{showAfterAI ? "Show Before AI" : "Show After AI"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
