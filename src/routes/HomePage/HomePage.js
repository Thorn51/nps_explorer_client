import React, { useContext } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import StateSelector from "../../components/StateSelector/StateSelector";
import "./HomePage.css";
import { GlobalContext } from "../../context/GlobalState";

export default function HomePage() {
  const { loading, searchState, parksInState } = useContext(GlobalContext);

  function renderParks() {
    if (loading === true) {
      return (
        <h3 className="news">Fetching Parks for {searchState[0].stateName}</h3>
      );
    } else {
      return (
        <h3 className="parks_list">
          {searchState[0].stateName} ({parksInState[0].length})
        </h3>
      );
    }
  }
  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="Find a national park to explore..."
        background="https://www.nps.gov/npgallery/GetAsset/2D26D223-1DD8-B71C-07C923F9B774BBB9/proxy/hires"
      />
      <StateSelector />
      {loading === null ? <h3 className="news">News</h3> : renderParks()}
    </>
  );
}
