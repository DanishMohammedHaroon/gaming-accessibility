import "./MotorPage.scss";
import MotorComponent from "../../components/Motor/Motor";
import MotorBackground from "../../assets/motor-background-xbox.jpg";

function MotorPage() {
  return (
    <>
      <div className="motor-background-wrapper">
        <img
          src={MotorBackground}
          alt="xbox-background"
          className="motor-background"
        ></img>
      </div>
      <MotorComponent />
    </>
  );
}

export default MotorPage;
