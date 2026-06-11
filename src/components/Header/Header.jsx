import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">EventLight Planner</h1>

        <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} />
      </div>
    </header>
  );
}

export default Header;
