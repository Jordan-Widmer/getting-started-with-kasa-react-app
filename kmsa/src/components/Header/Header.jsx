import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div>
        <img
          height={68}
          width={210}
          src={require("../../assets/logored.png")}
          alt="logo"
        />
      </div>
      <div>
        <ul className="nav-bar">
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/regardsto"
              className={location.pathname === "/regardsto" ? "active-link" : ""}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
