import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";

import "./ParkPage.css";

export default function ParkPage(props) {
  const { parksInState } = useContext(GlobalContext);

  // Find the park based on the park code
  const park = parksInState[0].find(
    park => park.parkCode === props.match.params.parkCode
  );

  console.log(park);

  // Generate a random number based on the image array size to use in Hero background
  const selectImage = Math.floor(Math.random() * park.images.length);

  return (
    <>
      <Navigation />
      <Hero
        title={park.name}
        background={park.images[selectImage].url}
        tag={park.designation}
      />
      <main className="park_main">
        <section className="overview">
          <h3 className="section_title">Description</h3>
          <p>{park.description}</p>
        </section>
        <section className="directions">
          <h3 className="section_title">Directions</h3>
          <p>{park.directionsInfo}</p>
        </section>
      </main>
    </>
  );
}
