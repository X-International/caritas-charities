"use client";

import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const MAP_LAT = siteConfig.office.coordinates.latitude;
const MAP_LNG = siteConfig.office.coordinates.longitude;
const MARKER_PATH = "/maps/Caritas_Kampala_Pin.png";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

export default function LocationMap() {
  return (
    <div className="w-full h-full bg-gray-100 relative">
      <Map
        initialViewState={{ longitude: MAP_LNG, latitude: MAP_LAT, zoom: 16.5 }}
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
        >
          <button
            type="button"
            aria-label="Open directions to Caritas Kampala Main Office"
            onClick={() => window.open(DIRECTIONS_URL, "_blank", "noopener,noreferrer")}
            className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2"
          >
            <Image 
              src={MARKER_PATH} 
              alt="Caritas Kampala Pin" 
              width={48} 
              height={48} 
              className="drop-shadow-md"
            />
          </button>
        </Marker>
      </Map>
    </div>
  );
}
