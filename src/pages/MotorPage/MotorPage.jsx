import "./MotorPage.scss";
import MotorComponent from "../../components/Motor/Motor";
import MotorBackground from "../../assets/motor-background-xbox.jpg";
import Header from "../../components/Header/Header";

function MotorPage() {
  return (
    <>
      <Header />
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
