import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
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
    </>
  );
}
