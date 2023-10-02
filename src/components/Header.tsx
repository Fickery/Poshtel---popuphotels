import "../style/header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="header-link_btn" to="/">
        Poshtel
      </Link>
      <nav>
        <NavLink className="header-navlink_btn" to="hotels">
          The popup Hotels
        </NavLink>
        <NavLink className="header-navlink_btn" to="locations">
          Locations
        </NavLink>
        <NavLink className="header-navlink_btn" to="contact">
          Contact
        </NavLink>
      </nav>
      <button className="header-signup_btn">Sign Up</button>
    </header>
  );
}
