import React from "react";

export default function Map(props) {
  let map;
  function initMap() {
    map = new google.maps.Map({
      center: { lat: props.lat, lng: props.lng },
      zoom: 8
    });
  }
  return <div>{map}</div>;
}
