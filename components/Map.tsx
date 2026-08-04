"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl, ViewStateChangeEvent } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

const MAP_LAT = 0.299230886593831;
const MAP_LNG = 32.593433862503;
const MARKER_PATH = "/maps/Caritas_Kampala_Pin.png";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

export default function LocationMap() {
  const [viewState, setViewState] = useState({
    longitude: MAP_LNG,
    latitude: MAP_LAT,
    zoom: 16.5,
  });

  return (
    <div className="w-full h-full bg-gray-100 relative">
      <Map
        {...viewState}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        minZoom={3}
        cooperativeGestures={true}
      >
        <NavigationControl position="top-right" />
        
        <Marker 
          longitude={MAP_LNG} 
          latitude={MAP_LAT} 
          anchor="bottom"
          onClick={() => {
            window.open(DIRECTIONS_URL, "_blank", "noopener,noreferrer");
          }}
          style={{ cursor: "pointer" }}
        >
          <div title="Caritas Kampala — Click to get directions">
            <Image 
              src={MARKER_PATH} 
              alt="Caritas Kampala Pin" 
              width={48} 
              height={48} 
              className="drop-shadow-md"
            />
          </div>
        </Marker>
      </Map>
    </div>
  );
}
