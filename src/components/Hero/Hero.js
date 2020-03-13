import React from "react";

export default function Hero(props) {
  return (
    <div class="hero" role="banner">
      <div class="title_container">
        <h1 class="title">{props.title}</h1>
      </div>
    </div>
  );
}
