"use client";

import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

const MAP_LAT = siteConfig.office.coordinates.latitude;
const MAP_LNG = siteConfig.office.coordinates.longitude;
const MARKER_PATH = "/maps/Caritas_Kampala_Pin.png";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function LocationMap() {
  const [hasError, setHasError] = useState(!MAPBOX_TOKEN);

  return (
    <div className="w-full h-full bg-gray-100 relative">
      {hasError ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-8 text-center">
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-600">The interactive map is unavailable right now.</p>
            <Button href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
              Open in Google Maps
            </Button>
          </div>
        </div>
      ) : null}
      {!hasError && <Map
        initialViewState={{ longitude: MAP_LNG, latitude: MAP_LAT, zoom: 16.5 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        minZoom={3}
        cooperativeGestures={true}
        onError={() => setHasError(true)}
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
      </Map>}
    </div>
  );
}
