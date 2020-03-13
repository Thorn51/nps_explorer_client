import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div className="hero" role="banner">
      <div className="title_container">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  );
}
