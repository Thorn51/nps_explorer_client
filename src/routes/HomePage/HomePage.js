import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import StateSelector from "../../components/StateSelector/StateSelector";
import ParkList from "../../components/ParkList/ParkList";
import PropagateLoader from "react-spinners/PropagateLoader";
import NewsReleaseList from "../../components/NewsReleaseList/NewsReleaseList";
import "./HomePage.css";

export default function HomePage() {
  const { loading, searchState, error } = useContext(GlobalContext);

  // Conditional render based on status of loading
  function renderParks() {
    if (loading === true) {
      return (
        <div className="loader">
          <h3 className="loading_text">
            Fetching Parks for {searchState.text}
          </h3>
          <div className="loader_animation">
            {error ? (
              <p className="alert">
                Unable to gather parks at this time. This is likely a network
                error. Please try again later.
              </p>
            ) : (
              <PropagateLoader />
            )}
          </div>
        </div>
      );
    } else {
      return <ParkList />;
    }
  }
  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="Demo user available on login page."
        background="https://www.nps.gov/npgallery/GetAsset/2D26D223-1DD8-B71C-07C923F9B774BBB9/proxy/hires"
      />
      <main>
        <StateSelector />
        {loading === null ? <NewsReleaseList /> : renderParks()}
      </main>
    </>
  );
}
