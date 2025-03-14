import "./SpeechPage.scss";
import React, { useState } from "react";
import image from "/starfield-character.webp";
import micIcon from "/mic-icon.png";

export default function SpeechPage({}) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [voiceTextVisible, setVoiceTextVisible] = useState(false);
  const [reloadOverlayVisible, setReloadOverlayVisible] = useState(false);
  const [additionalOverlayVisible, setAdditionalOverlayVisible] =
    useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const handleVoiceToTextClick = () => {
    setOverlayVisible(false);
    setVoiceTextVisible(true);
    setDisplayedText("");

    setTimeout(() => {
      setAdditionalOverlayVisible(true);

      setTimeout(() => {
        setAdditionalOverlayVisible(false);
      }, 3000);
    }, 10000);

    let index = 0;
    const text = "Player 1 says: Take cover, I can hear something’s coming!";
    let currentText = "";

    setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          currentText += text[index];
          setDisplayedText(currentText);
          index++;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            setVoiceTextVisible(false);
          }, 3000);
        }
      }, 100);
    }, 4000);
  };

  const handleCustomCommandsClick = () => {
    setReloadOverlayVisible(true);

    setTimeout(() => {
      setReloadOverlayVisible(false);
    }, 3000);
  };

  return (
    <div className="speech">
      <h1>Assistive Speech</h1>
      <div className="speech__settings">
        <div className="button__group">
          <button className="speech__button" onClick={handleVoiceToTextClick}>
            Enable Voice to Text
          </button>
          <button
            className="speech__button"
            onClick={handleCustomCommandsClick}
          >
            Enable Custom Commands
          </button>
        </div>
      </div>
      <div className="image__container">
        <img className="speech__image" src={image} alt="background image"></img>
        <div className="image__loading">
          <img
            className="speech__image"
            src={image}
            alt="background image"
          ></img>

          {voiceTextVisible && (
            <div className="text-overlay">
              <p>{displayedText}</p>
            </div>
          )}

          {reloadOverlayVisible && (
            <div className="reload-overlay">
              <p>Reloading...</p>
            </div>
          )}

          {overlayVisible && (
            <div className="overlay">
              <p className="overlay-text">ENABLE</p>
            </div>
          )}

          {additionalOverlayVisible && (
            <div className="additional-overlay">
              <p>Tip: Hold C to Cover!</p>
            </div>
          )}
        </div>
      </div>
      <button className="circle-button"></button>

      {voiceTextVisible && (
        <div className="voice__box">
          <img src={micIcon} alt="mic icon" className="voice__icon"></img>
          <p>Listening...</p>
        </div>
      )}
    </div>
  );
}
