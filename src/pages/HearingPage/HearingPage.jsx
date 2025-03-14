import "./HearingPage.scss";
import windowsLogo from "../../assets/images-logos/windows.svg";
import xboxLogo from "../../assets/images-logos/xbox.svg";
import speakerIcon from "../../../public/mic-icon.png";
import audioFile from "../../assets/audio/test_audio.mp3"; // Import audio from src/assets

import React, { useState, useRef } from "react";

function HearingPage() {
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the file
      audioRef.current.play();
    }
  };

  const handleTranscription = () => {
    setShowText(true);
  };

  return (
    <section className="hearing">
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
          {showText && <p className="hearing__text">Hello everyone. This is just a test audio to see if the app works.</p>}
        </div>
      </div>
      <audio ref={audioRef} src={audioFile} />
    </section>
  );
}

export default HearingPage;
