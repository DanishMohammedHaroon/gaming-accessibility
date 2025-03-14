import React, { useState } from "react";
import "./VisionPage.scss";
import VisionBackground from "../../assets/images/Starfield-Review-Featured-Games.webp";
import beforeAIImage from "../../assets/images/Vision_BeforeAI.png";
import afterAIImage from "../../assets/images/Vision_AfterAI.png";
import beforeAIImage2 from "../../assets/images/Vision2_BeforeAI.jpeg";
import afterAIImage2 from "../../assets/images/Vision2_AfterAI.jpeg";

export default function VisionPage() {
  const [showAfterAI, setShowAfterAI] = useState(false);
  const [showAnotherExample, setShowAnotherExample] = useState(false);
  const [showSecondExample, setShowSecondExample] = useState(false);

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

            {/* INFO BOXES - Visible only after AI is shown */}
            {showAfterAI && (
              <div className="vision__info-boxes">
                <div className="vision__info-box">
                  <strong>Dynamic UI & Contrast Adjustments:</strong>
                  <p>
                    Using computer vision and user data, AI can adjust contrast, text size, and color schemes in real time to improve readability.
                  </p>
                </div>
                <div className="vision__info-box">
                  <strong>Automated Screen Reader Integration:</strong>
                  <p>
                    AI enhances screen reader functionalities by interpreting game interfaces and ensuring all essential information is read aloud.
                  </p>
                </div>
                <div className="vision__info-box">
                  <strong>Adaptive Field of View & Layouts:</strong>
                  <p>
                    AI optimizes UI layouts by detecting when important elements might be off-screen, automatically adjusting placements.
                  </p>
                </div>
              </div>
            )}

            {/* BUTTONS */}
            <button onClick={() => setShowAfterAI(!showAfterAI)}>
              {showAfterAI ? "Show Before AI" : "Show After AI"}
            </button>

            {/* SHOW ANOTHER EXAMPLE BUTTON */}
            {showAfterAI && !showAnotherExample && (
              <button onClick={() => setShowAnotherExample(true)}>
                Show Another Example
              </button>
            )}
          </div>
        </div>

        {/* SECOND EXAMPLE SECTION - SPANS THE SAME OVERLAY */}
        {showAnotherExample && (
          <div className="vision__overlay vision__overlay--expanded">
            <div className="vision__overlay-content">
              <img
                className="vision__narrative-image"
                src={showSecondExample ? afterAIImage2 : beforeAIImage2}
                alt={showSecondExample ? "Another After AI Image" : "Another Before AI Image"}
              />
              <p className={showSecondExample ? "vision__narrative--after" : "vision__narrative"}>
                {showSecondExample
                  ? "The AI has enhanced the display to optimize readability and accessibility."
                  : "This is another example of how AI can improve the gaming experience."}
              </p>
              <button onClick={() => setShowSecondExample(!showSecondExample)}>
                {showSecondExample ? "Show Before AI" : "Show After AI"}
              </button>

              {/* CLOSE BUTTON */}
              <button onClick={() => setShowAnotherExample(false)} className="vision__close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}