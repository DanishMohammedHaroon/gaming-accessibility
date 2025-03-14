import "./HomePage.scss";

export default function HomePage({}) {
  return (
    <>
      <div className="homepage">
        <nav className="nav">
          <div className="nav__profile">
            <img className="nav__avatar" src="src\assets\icons\group.png"></img>
            <div className="nav__user">
              <h1 className="nav__name">Team Misfits</h1>
              <h3 className="nav__subscription">ULTIMATE</h3>
            </div>
            <div className="nav__achievements">
              <img
                className="nav__icon"
                src="src\assets\icons\gamerscore.png"
              ></img>
              <p className="nav__score">21,337</p>
            </div>
          </div>
          <ul className="nav__list">
            <li className="nav__link">Item 1</li>
            <li className="nav__link">Item 2</li>
            <li className="nav__link">Item 3</li>
            <li className="nav__link">Item 4</li>
            <li className="nav__link">Item 5</li>
            <li className="nav__link">Item 6</li>
          </ul>
          <div className="nav__info">
            <img className="nav__mic" src="src\assets\icons\mute.png"></img>
            <img
              className="nav__battery"
              src="src\assets\icons\battery.png"
            ></img>
            <p className="nav__time">04:55 pm</p>
          </div>
        </nav>

        <section className="games">
          {/* <img>Starfield</img>
          <img>Fortnite</img>
          <img>Diablo IV</img>
          <img>Assassin's Creed: Mirage</img>
          <img>Ghostwire</img>
          <img>Forza: Motorsport</img>
          <img>Minecraft</img>
          <img>Disney</img>
          <img>Party Animals</img> */}
        </section>
        <section className="options">
          {/* <img>Browse your games</img>
          <img>Customize your Home</img>
          <img>Forza Horizon 5</img>
          <img>Play life a Pro</img> */}
        </section>
      </div>
    </>
  );
}
