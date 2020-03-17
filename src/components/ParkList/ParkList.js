import React, { useContext } from "react";
import ParkCard from "../ParkCard/ParkCard";
import "./ParkList.css";
import { GlobalContext } from "../../context/GlobalState";

export default function ParkList() {
  const { parksInState } = useContext(GlobalContext);

  return (
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
  );
}
