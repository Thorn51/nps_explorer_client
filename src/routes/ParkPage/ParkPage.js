import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import PropagateLoader from "react-spinners/PropagateLoader";
import CommentList from "../../components/CommentList/CommentList";
import "./ParkPage.css";

export default function ParkPage(props) {
  const { getParkByParkCode, park } = useContext(GlobalContext);

  // Find the park based on the park code
  const parkCode = props.match.params.parkCode;

  // Fetch the data from NPS and add it to the global state
  useEffect(() => {
    getParkByParkCode(parkCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <main className="park_main">
            <section className="overview">
              <h3 className="section_title">Description</h3>
              <p>{park.description}</p>
            </section>
            <section className="directions">
              <h3 className="section_title">Directions</h3>
              <p>{park.directionsInfo}</p>
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
