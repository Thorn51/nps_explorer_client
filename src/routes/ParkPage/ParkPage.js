import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import PropagateLoader from "react-spinners/PropagateLoader";
import CommentList from "../../components/CommentList/CommentList";
import "./ParkPage.css";
import UserInteractions from "../../components/UserInteractions/UserInteractions";
import TokenServices from "../../services/token-service";
import Map from "../../components/Map/Map";

export default function ParkPage(props) {
  const { getParkByParkCode, park, getFavorites, favorites } = useContext(
    GlobalContext
  );

  // Find the park based on the park code
  const parkCode = props.match.params.parkCode;

  // Fetch the data from NPS and add it to the global state
  useEffect(() => {
    getParkByParkCode(parkCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Fetch the favorites to pass down to user interactions
  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(park);
  // Wait for data
  function renderPage() {
    if (park.length === 0) {
      return (
        <>
          <Navigation />
          <Hero title={park.name} background={null} tag={park.designation} />
          <div className="loader">
            <h3 className="section_title">Fetching Park Details</h3>
            <div className="loader_animation">
              <PropagateLoader />
            </div>
          </div>
        </>
      );
    } else {
      // Generate a random number based on the image array size to use in Hero background
      const selectImage = Math.floor(Math.random() * park.images.length);
      return (
        <>
          <Navigation />
          <Hero
            title={park.name}
            background={
              park.images.length > 0 ? park.images[selectImage].url : null
            }
            tag={park.designation}
          />
          {TokenServices.hasAuthToken() && (
            <UserInteractions
              favorites={favorites.filter(
                favorite => favorite.parkCode === parkCode
              )}
              parkCode={parkCode}
            />
          )}
          <main className="park_main">
            <section className="overview">
              <h3 className="section_title">Description</h3>
              <p>{park.description}</p>
            </section>
            <section className="directions">
              <h3 className="section_title">Directions</h3>
              <p>{park.directionsInfo}</p>
              {park.longitude ? (
                <div className="map">
                  <Map
                    parks={park}
                    latitude={parseFloat(park.latitude)}
                    longitude={parseFloat(park.longitude)}
                    zoom={9}
                  />
                </div>
              ) : null}
            </section>
            <CommentList parkCode={parkCode} parkName={park.name} />
          </main>
        </>
      );
    }
  }

  return renderPage();
}

ParkPage.defaultProps = {
  match: { params: {} }
};
