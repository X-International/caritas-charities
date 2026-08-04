"use client";

import { useEffect, useRef, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const MAP_LAT = 0.299230886593831;
const MAP_LNG = 32.593433862503;
const MARKER_PATH = "/maps/Caritas_Kampala_Pin.png";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

declare global {
  interface Window {
    google: typeof google;
    initMapCallback?: () => void;
  }
}

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window.google !== "undefined" && window.google.maps) {
      resolve();
      return;
    }

    if (window.initMapCallback) {
      window.initMapCallback = () => resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMapCallback`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));

    window.initMapCallback = () => resolve();

    document.head.appendChild(script);
  });
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    loadGoogleMapsScript()
      .then(() => {
        if (cancelled || !mapRef.current || window.google === undefined) return;

        const mapElement = mapRef.current;
        const center: google.maps.LatLngLiteral = { lat: MAP_LAT, lng: MAP_LNG };

        const map = new window.google.maps.Map(mapElement, {
          center,
          zoom: 17,
          minZoom: 3,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          scrollwheel: true,
          gestureHandling: "cooperative",
        });

        mapInstanceRef.current = map;

        resizeObserver = new ResizeObserver(() => {
          if (mapInstanceRef.current) {
            window.google.maps.event.trigger(mapInstanceRef.current, "resize");
            mapInstanceRef.current.setCenter(center);
          }
        });
        resizeObserver.observe(mapElement);

        const marker = new window.google.maps.Marker({
          position: center,
          map,
          title: "Caritas Kampala — Click to get directions",
          optimized: false,
          cursor: "pointer",
          icon: {
            url: MARKER_PATH,
            scaledSize: new window.google.maps.Size(48, 48),
            size: new window.google.maps.Size(48, 48),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(24, 48),
          },
        });

        marker.addListener("click", () => {
          window.open(DIRECTIONS_URL, "_blank", "noopener,noreferrer");
        });

        setIsLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setHasError(true);
      });

    return () => {
      cancelled = true;
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 relative">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#b10017] rounded-full animate-spin" />
            <p className="text-sm text-gray-500 font-medium">Loading map...</p>
          </div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600 font-medium">Unable to load the map.</p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-[#b10017] text-white text-sm font-bold rounded-full hover:bg-red-900 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full h-full"
        role="application"
        aria-label="Caritas Kampala Office Location Map — click the pin to get directions"
      />
    </div>
  );
}
