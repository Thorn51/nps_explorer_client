import React from "react";
import "./ValidationError.css";

export default function ValidationError(props) {
  // Used to display message if form validation fails
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}
