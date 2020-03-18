import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="About National Parks Explorer"
      />
    </>
  );
}
