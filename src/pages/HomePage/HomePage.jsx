import CognitivePage from "../CognitivePage/CognitivePage";
import "./HomePage.scss";
import Header from "../../components/Header/Header";

export default function HomePage({}) {
  return (
    <>
      <div className="homepage">
        <Header />
        <section className="games">
          <div>
            <img
              className="games__starfield"
              src="src\assets\images\starfield.png"
            ></img>
          </div>

          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\fortnite.png"
            ></img>
          </div>

          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\diablo.png"
            ></img>
          </div>
          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\mirage.png"
            ></img>
          </div>
          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\ghostwire.png"
            ></img>
          </div>
          <div className="games__container">
            <img className="games__img" src="src\assets\images\forza.png"></img>
          </div>

          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\minecraft.png"
            ></img>
          </div>
          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\disney.png"
            ></img>
          </div>
          <div className="games__container">
            <img
              className="games__img"
              src="src\assets\images\partyanimals.png"
            ></img>
          </div>
        </section>
        <section className="options">
          <img
            className="options__img"
            src="src\assets\images\browse.png"
          ></img>
          <img
            className="options__img"
            src="src\assets\images\customize.png"
          ></img>
          <img
            className="options__img"
            src="src\assets\images\gamepass.png"
          ></img>
          <img className="options__img" src="src\assets\images\pro.png"></img>
        </section>
      </div>
    </>
  );
}
