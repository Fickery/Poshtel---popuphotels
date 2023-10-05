import "../style/header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#0174c3",
  };

  return (
    <header>
      <Link className="header-link_btn" to="/">
        Poshtel
      </Link>
      <nav>
        <NavLink
          className="header-navlink_btn"
          to="hotels"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          The popup Hotels
        </NavLink>
        <NavLink
          className="header-navlink_btn"
          to="locations"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Locations
        </NavLink>
        <NavLink
          className="header-navlink_btn"
          to="contact"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Contact
        </NavLink>
      </nav>
      <button className="header-signup_btn">Sign Up</button>
    </header>
  );
}
