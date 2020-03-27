import React from "react";
import { Link } from "react-router-dom";
import TokenServices from "../../services/token-service";
import "./Navigation.css";

export default function Navigation() {
  const handleLogOut = () => {
    TokenServices.clearAuthToken();
  };

  const renderLogoutNav = () => {
    return (
      <nav>
        <ul className="navigation_list">
          <ul className="nav_logo">
            <li className="nav_li">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <li className="nav_li">
            <Link onClick={handleLogOut} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  const renderLoginNav = () => {
    return (
      <nav>
        <ul className="navigation_list">
          <ul className="nav_logo">
            <li className="nav_li">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <li className="nav_li">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav_li">
            <Link to="/registration">Register</Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <>{TokenServices.hasAuthToken() ? renderLogoutNav() : renderLoginNav()}</>
  );
}
