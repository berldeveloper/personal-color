"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export interface Location {
  id: number;
  name: string;
  coordinates: [number, number]; // [lng, lat]
}

interface MapProps {
  locations: Location[];
}



export default function Map({ locations }: MapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },
      center: [106.827153, -6.175392], // Jakarta
      zoom: 11,
    });

    locations.forEach((loc) => {
      new maplibregl.Marker({
        color: "#06D6A0",
      })
        .setLngLat(loc.coordinates)
        .addTo(map.current!);
    });
  }, [locations]);

  return (
    <div
      ref={mapContainer}
      className="w-[20vw] h-[500px] rounded-lg shadow-lg"
    />
  );
}
