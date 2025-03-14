import "./HearingPage.scss";
import windowsLogo from "/images-logos/windows.svg";
import xboxLogo from "/images-logos/xbox.svg";
// import speakerIcon from "./images-logos/speaker.png";
// import audio from "../../../public/audio/test_audio.mp3"
import React, { useState, useRef } from "react";

function HearingPage() {
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null);
  const audioFilePath = "../../../public/audio/test_audio.mp3"; // Ensure this file exists in the public folder

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleTranscription = () => {
    setShowText(true);
  };

  return (
    <section className="hearing">
      <div className="hearing__icons">
        <img className="hearing__windows" src={windowsLogo} alt="Windows Logo" />
        <img className="hearing__xbox" src={xboxLogo} alt="Xbox Logo" />
      </div>
      <div className="hearing__container">
        <div className="hearing__overlay">
          <img 
            className="hearing__speaker" 
            src={speakerIcon} 
            alt="Speaker Icon" 
            onClick={playAudio} 
            style={{ cursor: "pointer" }} 
          />
          <button className="hearing__button" onClick={handleTranscription}>Click to Transcribe</button>
        </div>
        <div className="hearing__content">
        </div>
      </div>
      <div className="hearaing_context"> {showText && <p className="hearing__text">Hello everyone. This is just a test audio to see if the app works.</p>}</div>
      <audio ref={audioRef} src={audioFilePath} />
    </section>
  );
}

export default HearingPage;
