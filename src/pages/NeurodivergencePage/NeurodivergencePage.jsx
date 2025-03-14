import "./NeurodivergencePage.scss";
import WindowsLogo from "../../components/WindowsLogo/WindowsLogo.jsx";
import XboxLogo from "../../components/XboxLogo/XboxLogo.jsx";
import React from "react";

function NeuroDivergencePage() {
  return (
    <div className="neuro__page">
      <div className="neuro__logos">
        <WindowsLogo className="neuro__xbox" />
        <XboxLogo className="neuro__windows" />
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img src="/minecraft1.png" alt="Minecraft normal text" />
          <p className="description">
            This is <strong>normal text</strong>.
          </p>
        </div>

        <div className="image-wrapper">
          <img src="/minecraft2.png" alt="Minecraft text for neurodivergent" />
          <p className="description alt-font">
            This is also normal text, <br />
            but it’s more readable by neurodivergent users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NeuroDivergencePage;
