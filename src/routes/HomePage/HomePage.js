import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import StateSelector from "../../components/StateSelector/StateSelector";
import ParkList from "../../components/ParkList/ParkList";
import PropagateLoader from "react-spinners/PropagateLoader";
import NewsReleaseList from "../../components/NewsReleaseList/NewsReleaseList";

export default function HomePage() {
  const { loading, searchState, parksInState } = useContext(GlobalContext);

  // Conditional render based on status of loading
  function renderParks() {
    if (loading === true) {
      return (
        <div className="loading_animation">
          <h3 className="news">
            Fetching Parks for {searchState[0].stateName}
          </h3>
          <PropagateLoader />
        </div>
      );
    } else {
      return (
        <h3 className="parks_list">
          {searchState[0].stateName} ({parksInState[0].length})
          <ParkList />
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
      <main>
        <StateSelector />
        <section className="content">
          {loading === null ? <NewsReleaseList /> : renderParks()}
        </section>
      </main>
    </>
  );
}
