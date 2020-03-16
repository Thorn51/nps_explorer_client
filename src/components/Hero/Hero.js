import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <>
      <div
        className="hero"
        role="banner"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div className="title_container">
          <h1 className="title">{props.title}</h1>
        </div>
      </div>
      <div className="tag">
        <h3 className="tag_text">{props.tag}</h3>
      </div>
    </>
  );
}
