import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ParkCard from "../ParkCard/ParkCard";
import "./ParkList.css";
import Map from "../Map/Map";

export default function ParkList() {
  const { parksInState, searchState } = useContext(GlobalContext);

  return (
    <div className="parks_container">
      <h3 className="parks_list_header">
        {searchState.text} ({parksInState.length})
      </h3>
      <div className="map">
        <Map
          parks={parksInState}
          latitude={searchState.center[1]}
          longitude={searchState.center[0]}
          zoom={5}
        />
      </div>
      <section className="featured_parks">
        {parksInState.map(park => (
          <ParkCard
            key={park.id}
            designation={park.designation}
            name={park.name}
            description={park.description}
            parkCode={park.parkCode}
          />
        ))}
      </section>
    </div>
  );
}

ParkList.defaultProps = {
  searchState: []
};
