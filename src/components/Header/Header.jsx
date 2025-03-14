import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__profile">
          <img className="nav__avatar" src="src\assets\icons\group.png"></img>
          <div className="nav__profile-details">
            <div className="nav__user">
              <h1 className="nav__name">Team Misfits</h1>
              <h5 className="nav__subscription">ULTIMATE</h5>
            </div>
            <div className="nav__achievements">
              <img
                className="nav__icon"
                src="src\assets\icons\gamerscore.png"
              ></img>
              <p className="nav__score">21,337</p>
            </div>
          </div>
        </div>

        {/* floating drawer menu */}
        {isDrawerOpen && (
          <div className="drawer">
            <ul className="drawer__list">
              <Link to="/motor" className="drawer__item">
                Motor
              </Link>
              <Link to="/cognitive" className="drawer__item">
                Cognitive
              </Link>
              <Link to="/vision" className="drawer__item">
                Vision
              </Link>
              <Link to="/hearing" className="drawer__item">
                Hearing
              </Link>
              <Link to="/speech" className="drawer__item">
                Speech
              </Link>
              <Link to="/neuro" className="drawer__item">
                Neurodivergent
              </Link>
              <Link to="/general" className="drawer__item">
                General
              </Link>
            </ul>
          </div>
        )}

        <div className="nav__list">
          <img className="nav__item" src="src\assets\icons\library.png"></img>
          <img className="nav__item" src="src\assets\icons\shop.png"></img>
          <img className="nav__item" src="src\assets\icons\pass.png"></img>
          <img className="nav__item" src="src\assets\icons\search.png"></img>
          <img className="nav__item" src="src\assets\icons\settings.png"></img>
          <img
            className="nav__item"
            src="src\assets\icons\copilot.png"
            onClick={toggleDrawer}
            style={{ cursor: "pointer" }}
          ></img>
        </div>
        <div className="nav__info">
          <img className="nav__mic" src="src\assets\icons\mute.png"></img>
          <img
            className="nav__battery"
            src="src\assets\icons\battery.png"
          ></img>
          <h3 className="nav__time">02:15 pm</h3>
        </div>
      </nav>
    </>
  );
};

export default Header;
