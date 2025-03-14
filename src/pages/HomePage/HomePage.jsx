import "./HomePage.scss";

export default function HomePage({}) {
  return (
    <>
      <div className="homepage">
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
          <div className="nav__list">
            <img className="nav__item" src="src\assets\icons\library.png"></img>
            <img className="nav__item" src="src\assets\icons\shop.png"></img>
            <img className="nav__item" src="src\assets\icons\pass.png"></img>
            <img className="nav__item" src="src\assets\icons\search.png"></img>
            <img
              className="nav__item"
              src="src\assets\icons\settings.png"
            ></img>
            <img className="nav__item" src="src\assets\icons\copilot.png"></img>
          </div>
          <div className="nav__info">
            <img className="nav__mic" src="src\assets\icons\mute.png"></img>
            <img
              className="nav__battery"
              src="src\assets\icons\battery.png"
            ></img>
            <h3 className="nav__time">04:55 pm</h3>
          </div>
        </nav>

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
            src="src\assets\images\maxresdefault.png"
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
