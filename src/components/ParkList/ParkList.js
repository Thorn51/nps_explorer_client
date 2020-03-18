import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ParkCard from "../ParkCard/ParkCard";
import "./ParkList.css";

export default function ParkList() {
  const { parksInState, searchState } = useContext(GlobalContext);

  return (
    <div className="parks_container">
      <h3 className="parks_list_header">
        {searchState[0].stateName} ({parksInState[0].length})
      </h3>
      <section className="featured_parks">
        {parksInState[0].map(park => (
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
