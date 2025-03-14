import React, { useState, useEffect } from "react";
import "./CognitivePage.scss";
import cognitive1 from "../../../src/assets/images/Starfield3.webp";

export default function CognitivePage() {
  const [showAfterAI, setShowAfterAI] = useState(false);
  const [animatedText, setAnimatedText] = useState("");

  const beforeAIText =
    "Time anomalies are wreaking havoc in Sector Gamma-9 due to 'The Nexus' artifact. Researchers are experiencing strange aging and memory issues, while local creatures have turned aggressive. Emergency evacuation is underway.";
  const afterAIText = " Time is breaking. Creatures are attacking. Get out now.";

  const toggleText = () => {
    setShowAfterAI(!showAfterAI);
    setAnimatedText("");
  };

  useEffect(() => {
    let currentText = showAfterAI ? afterAIText : beforeAIText;
    let index = 0;
    let interval;

    if (showAfterAI) {
      interval = setInterval(() => {
        if (index < currentText.length) {
          setAnimatedText((prev) => prev + currentText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    } else {
      interval = setInterval(() => {
        if (index < currentText.length) {
          setAnimatedText((prev) => prev + currentText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }

    return () => clearInterval(interval);
  }, [showAfterAI]);

  return (
    <>
      <div className="cognitive__container">
        <img className="cognitive__background-image" src={cognitive1} alt="Starfield Into The Starfield Wallpaper" />
        <div className="overlay">
          <div className="overlay-content">
            <p className="cognitive__narrative">{animatedText}</p>
            <button onClick={toggleText}>{showAfterAI ? "Show Before AI" : "Show After AI"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
