import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import config from "../../config";

export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: props.zoom
  });

  const [selectedPark, setSelectedPark] = useState(null);

  console.log(selectedPark);

  const renderMarkers = () => {
    if (props.parks.length > 1) {
      return props.parks.map(park => {
        // If longitude data is missing skip adding marker
        if (park.longitude == false) {
          return null;
        } else {
          return (
            <Marker
              key={park.id}
              latitude={parseFloat(park.latitude)}
              longitude={parseFloat(park.longitude)}
            >
              <img
                src="https://i.imgur.com/MK4NUzI.png"
                alt="Map marker icon"
                onClick={e => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              />
            </Marker>
          );
        }
      });
    } else {
      return (
        <Marker
          latitude={parseFloat(props.parks.latitude)}
          longitude={parseFloat(props.parks.longitude)}
        >
          <img src="https://i.imgur.com/MK4NUzI.png" alt="Map marker icon" />
        </Marker>
      );
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={config.MAP_TOKEN}
    >
      {renderMarkers()}
      {selectedPark && (
        <Popup
          latitude={parseFloat(selectedPark.latitude)}
          longitude={parseFloat(selectedPark.longitude)}
          onClose={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h4>{selectedPark.name}</h4>
            <address>
              <p>{selectedPark.addresses[1].line1}</p>
              <p>
                {selectedPark.addresses[1].city},{" "}
                {selectedPark.addresses[1].stateCode}{" "}
                {selectedPark.addresses[1].postalCode}
              </p>
            </address>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}
