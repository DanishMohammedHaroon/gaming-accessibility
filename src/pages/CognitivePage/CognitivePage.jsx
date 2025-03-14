import React, { useState } from "react";
import "./CognitivePage.scss";
import cognitive1 from "../../../src/assets/images/Starfield3.webp";
import Header from "../../components/Header/Header.jsx";

export default function CognitivePage() {
  const [showAfterAI, setShowAfterAI] = useState(false);

  const beforeAIText =
    "Time anomalies are wreaking havoc in Sector Gamma 9 due to 'The Nexus' artifact.\nResearchers are experiencing strange aging and memory issues,\nwhile local creatures have turned aggressive.\nEmergency evacuation is underway.";
  const afterAIText =
    "Time is breaking. Creatures are attacking.\nGet out now.";

  const toggleText = () => {
    setShowAfterAI(!showAfterAI);
  };

  return (
    <>
      <Header />
      <div className="cognitive__container">
        <img
          className="cognitive__background-image"
          src={cognitive1}
          alt="Starfield Into The Starfield Wallpaper"
        />
        <div className="overlaycognitive">
          <div className="overlaycognitive-content">
            <p
              className={`cognitive__narrative ${
                showAfterAI ? "after-ai" : "before-ai"
              }`}
            >
              {showAfterAI ? afterAIText : beforeAIText}
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
