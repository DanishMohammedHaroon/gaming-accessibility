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

      <div className="neuro__images">
        <div className="neuro__wrapper-normal">
          <img
            src="/public/images-logos/minecraft.svg"
            alt="Minecraft normal text"
          />
        </div>
        <div className="neuro__wrapper-dyslexic">
          <img
            src="/public/images-logos/minecrafdyslexic.svg"
            alt="Minecraft text for neurodivergent"
          />
        </div>
      </div>
    </div>
  );
}

export default NeuroDivergencePage;
