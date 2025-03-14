import "./HearingPage.scss";
// import Hearing from "../../components/Hearing/Hearing";
import windows from "../../../public/images_logos/windows_logo.svg";
import xbox from "../../../public/images_logos/xbox.svg";
import speaker from "../../../public/images_logos/speaker.jpg"

function HearingPage(){
    return(
        <section className="hearing">
            <div className="hearing__icons">
                <img src={windows} alt="Windows Logo" />
                <img src={xbox} alt="Xbox logo" />
            </div>
            <div className="hearing__img-1">
                <img src={speaker} alt="Speaker Icon" />
                <button>Click to Transcribe</button>
            </div> 
        </section>
    );
}

export default HearingPage;