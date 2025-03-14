import CognitivePage from "../CognitivePage/CognitivePage";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";

export default function HomePage({}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="homepage">
        <Header />
        <section className="games">
          <img
            className="games__starfield"
            src="src\assets\images\starfield.png"
          ></img>
          <img
            className="games__img"
            src="src\assets\images\fortnite.png"
          ></img>
          <img className="games__img" src="src\assets\images\diablo.png"></img>
          <img className="games__img" src="src\assets\images\mirage.png"></img>
          <img
            className="games__img"
            src="src\assets\images\ghostwire.png"
          ></img>
          <img className="games__img" src="src\assets\images\forza.png"></img>
          <img
            className="games__img"
            src="src\assets\images\minecraft.png"
          ></img>
          <img className="games__img" src="src\assets\images\disney.png"></img>
          <img
            className="games__img"
            src="src\assets\images\partyanimals.png"
          ></img>
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
