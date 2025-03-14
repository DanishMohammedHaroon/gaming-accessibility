import React, { useState } from "react";
import "./VisionPage.scss";
import VisionBackground from "../../assets/images/Starfield-Review-Featured-Games.webp";
import beforeAIImage from "../../assets/images/Vision_BeforeAI.png";
import afterAIImage from "../../assets/images/Vision_AfterAI.png";

export default function VisionPage() {
    const [showAfterAI, setShowAfterAI] = useState(false);
  
    const toggleText = () => {
      setShowAfterAI(!showAfterAI);
    };
  
    return (
      <>
        <div className="vision__container">
          <img
            className="vision__background-image"
            src={VisionBackground}
            alt="Starfield Into The Starfield Wallpaper"
          />
  
          <div className="vision__overlay">
            <div className="vision__overlay-content">
              {/* CONDITIONAL IMAGE */}
              <img
                className="vision__narrative-image"
                src={showAfterAI ? afterAIImage : beforeAIImage}
                alt={showAfterAI ? "After AI Image" : "Before AI Image"}
              />
  
              {/* TEXT */}
              <p className={showAfterAI ? "vision__narrative--after" : "vision__narrative"}>
                {showAfterAI
                  ? "Time is breaking. Creatures are attacking. Get out now."
                  : "Time anomalies are wreaking havoc in Sector Gamma-9 due to 'The Nexus' artifact. Researchers are experiencing strange aging and memory issues, while local creatures have turned aggressive. Emergency evacuation is underway."}
              </p>

              {/* INFO BOXES - Visible only after AI is shown, placed above overlay */}
          {showAfterAI && (
            <div className="vision__info-boxes">
              <div className="vision__info-box">
                <strong>Dynamic UI & Contrast Adjustments:</strong>
                <p>
                  Using computer vision and user data, AI can adjust contrast, text size, and color schemes in real time to improve readability based on ambient light or user preferences.
                </p>
              </div>
              <div className="vision__info-box">
                <strong>Automated Screen Reader Integration:</strong>
                <p>
                  AI enhances screen reader functionalities by interpreting game interfaces and ensuring all essential information is read aloud, supporting screen reader compatibility.
                </p>
              </div>
              <div className="vision__info-box">
                <strong>Adaptive Field of View & Layouts:</strong>
                <p>
                  AI helps optimize UI layouts by detecting when important visual elements might be off-screen, automatically adjusting placements to keep crucial information in view.
                </p>
              </div>
            </div>
          )}
  
              {/* BUTTON */}
              <button onClick={toggleText}>
                {showAfterAI ? "Show Before AI" : "Show After AI"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
