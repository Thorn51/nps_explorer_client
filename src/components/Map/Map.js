import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 39.550053, lng: -105.782066 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
