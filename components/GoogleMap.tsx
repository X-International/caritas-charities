"use client";

import { useEffect, useRef, useState } from "react";

const API_KEY = "AIzaSyByUtXEZAoEcliwaUDu_ETmV73nl2QzZ20";
const MAP_LAT = 0.30181680920712806;
const MAP_LNG = 32.593244809970635;
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
    let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
    let isPinnedOpen = false;

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
          title: "Caritas Kampala",
          optimized: false,
          icon: {
            url: MARKER_PATH,
            scaledSize: new window.google.maps.Size(48, 48),
            size: new window.google.maps.Size(48, 48),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(24, 48),
          },
        });

        const infoContent = `
          <div id="caritas-info-root" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif; width: 320px; padding: 0;">
            <div style="background: linear-gradient(135deg, #a90012 0%, #b10017 100%); padding: 14px 18px; margin: -1px -1px 0 -1px; border-radius: 2px 2px 0 0;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="background: rgba(255,255,255,0.15); width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: white; letter-spacing: -0.01em;">Caritas Kampala</h3>
                  <p style="margin: 2px 0 0 0; font-size: 11px; color: rgba(255,255,255,0.8); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;">Office Location</p>
                </div>
              </div>
            </div>
            <div style="padding: 16px 18px 18px 18px; background: white;">
              <div style="display: flex; gap: 10px; margin-bottom: 14px;">
                <div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px; background: #fef2f2; display: flex; align-items: center; justify-content: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a90012" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-3 7 3z"/>
                  </svg>
                </div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 2px 0; font-size: 10.5px; font-weight: 700; color: #9ca3af; letter-spacing: 0.06em; text-transform: uppercase;">Address</p>
                  <p style="margin: 0; font-size: 13.5px; color: #374151; line-height: 1.45; font-weight: 500;">Old Ggaba Road &mdash; Nsambya,<br/>P.O. Box 14125, Kampala, Uganda</p>
                </div>
              </div>
              <div style="display: flex; gap: 10px; margin-bottom: 18px;">
                <div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px; background: #eff6ff; display: flex; align-items: center; justify-content: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 2px 0; font-size: 10.5px; font-weight: 700; color: #9ca3af; letter-spacing: 0.06em; text-transform: uppercase;">Phone</p>
                  <a href="tel:+256392176443" style="font-size: 14px; color: #2563eb; text-decoration: none; font-weight: 700; transition: color 0.15s ease;" onmouseover="this.style.color='#1d4ed8'" onmouseout="this.style.color='#2563eb'">+256 392 176 443</a>
                </div>
              </div>
              <a
                href="${DIRECTIONS_URL}"
                target="_blank"
                rel="noopener noreferrer"
                style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px 18px; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; text-decoration: none; border-radius: 10px; font-size: 13.5px; font-weight: 700; transition: all 0.15s ease; box-shadow: 0 2px 6px rgba(37,99,235,0.25);"
                onmouseover="this.style.background='linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 10px rgba(37,99,235,0.35)';"
                onmouseout="this.style.background='linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 6px rgba(37,99,235,0.25)';"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent,
          maxWidth: 380,
          pixelOffset: new window.google.maps.Size(0, -4),
          ariaLabel: "Caritas Kampala office information",
        });

        marker.addListener("click", () => {
          isPinnedOpen = true;
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            hoverTimeout = null;
          }
          infoWindow.open(map, marker);
        });

        marker.addListener("mouseover", () => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            hoverTimeout = null;
          }
          if (!isPinnedOpen) {
            infoWindow.open(map, marker);
          }
        });

        marker.addListener("mouseout", () => {
          if (!isPinnedOpen) {
            hoverTimeout = setTimeout(() => {
              infoWindow.close();
            }, 300);
          }
        });

        infoWindow.addListener("closeclick", () => {
          isPinnedOpen = false;
        });

        map.addListener("click", () => {
          isPinnedOpen = false;
          infoWindow.close();
        });

        setIsLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setHasError(true);
      });

    return () => {
      cancelled = true;
      if (resizeObserver) resizeObserver.disconnect();
      if (hoverTimeout) clearTimeout(hoverTimeout);
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
        aria-label="Caritas Kampala Office Location Map"
      />
    </div>
  );
}
