import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="navigation_list">
          <li className="nav_li">
            <a href="#login">Login</a>
          </li>
          <li className="nav_li">
            <a href="#register">Register</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
