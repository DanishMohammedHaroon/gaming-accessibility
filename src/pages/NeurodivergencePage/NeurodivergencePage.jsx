import "./NeurodivergencePage.scss";
import React from "react";


function NeuroDivergencePage() {
  return (
    <div className="neuro__page">
      <div className="neuro__logos">
        <img
          src="public/images-logos/xbox.svg"
          alt="x-box logo"
          className="neuro__xbox"
        />
        <img src="public/images-logos/windows.svg" alt="windows logo" className="neuro__windows" />
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