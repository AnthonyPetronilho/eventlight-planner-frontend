import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLogout, onLoginClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">EventLight Planner</h1>

        <Navigation
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          onLoginClick={onLoginClick}
        />
      </div>
    </header>
  );
}

export default Header;
