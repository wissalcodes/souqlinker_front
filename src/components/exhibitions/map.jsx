"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
const guangzhouCoords = [23.1291, 113.2644];

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.freepik.com/512/684/684908.png",
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};
const markers = [
  {
    geocode: guangzhouCoords,
    popUp: "this is Algeria",
  },
];
export default function Map() {
  return (
    <>
      <MapContainer
        center={guangzhouCoords}
        zoom={10}
        className="ml-[58vw] w-[30vw] h-[70vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
