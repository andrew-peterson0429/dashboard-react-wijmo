import { NavLink } from "react-router-dom";
import "./MainNavigation.module.css";
import logo from "../../Assets/mescius_logo.png";
import avatar from "../../Assets/justin.jpg";
import "bootstrap/dist/css/bootstrap.css";

function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-none">
      <a className="navbar-brand">
        <img src={logo} width="60" height="60" alt="Mescius Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/dashboard" end={true}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/reports">
              Reports
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li> */}
        </ul>
      </div>
      <div className="form-inline">
        <button className="rounded-circle">
          <img
            src={avatar}
            className="rounded-circle "
            width="60"
            height="60"
            alt="Avatar"
          />
        </button>
      </div>
    </nav>
  );
}

export default MainNavigation;
