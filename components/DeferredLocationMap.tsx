"use client";

import { type ComponentType, useEffect, useRef, useState } from "react";

type LocationMapComponent = ComponentType;

export default function DeferredLocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [LocationMap, setLocationMap] = useState<LocationMapComponent | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || LocationMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import("@/components/Map").then((module) => setLocationMap(() => module.default));
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [LocationMap]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {LocationMap ? (
        <LocationMap />
      ) : (
        <div className="h-full w-full animate-pulse bg-gray-200" aria-label="Loading map" />
      )}
    </div>
  );
}
