import React from "react";
import { Link } from "react-router-dom";
import "./ParkCard.css";

export default function ParkCard(props) {
  // Shorten description to fit on cards
  function truncate(content) {
    const words = content.split(" ");

    if (words.length > 15) {
      return words.slice(0, 20).join(" ") + "...";
    } else {
      return words.join(" ");
    }
  }
  return (
    <Link to={`/park/${props.parkCode}`} className="park_link">
      <div className="park_card">
        <h5 className="pc_designation">
          {props.designation === ""
            ? "National Park Service"
            : props.designation}
        </h5>
        <h3 className="pc_name">{props.name}</h3>
        <p className="pc_description">{truncate(props.description)}</p>
      </div>
    </Link>
  );
}
