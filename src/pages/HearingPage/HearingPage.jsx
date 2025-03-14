import "./HearingPage.scss";
import windowsLogo from "../../../public/images-logos/windows.svg";
import xboxLogo from "../../../public/images-logos/xbox.svg";
import speakerIcon from "../../../public/images_logos/speaker.jpg";

function HearingPage() {
  return (
    <section className="hearing">
      <div className="hearing__icons">
        <img className="hearing__windows" src={windowsLogo} alt="Windows Logo" />
        <img className="hearing__xbox" src={xboxLogo} alt="Xbox Logo" />
      </div>
      <div className="hearing__content">
        <div className="hearing__overlay">
          <img className="hearing__speaker" src={speakerIcon} alt="Speaker Icon" />
          <button className="hearing__button">Click to Transcribe</button>
        </div>
      </div>
    </section>
  );
}

export default HearingPage;
