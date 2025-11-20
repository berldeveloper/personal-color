"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { renderToString } from "react-dom/server";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Place from "@/public/flower.png"
import Image from "next/image";
import { Badge } from "../ui/badge";
import { BadgeCheckIcon, MapPin } from "lucide-react";

export interface Location {
    id: number;
    name: string;
    coordinates: [number, number];
}

interface MapProps {
    locations: Location[];
}

function PopupContent({ name }: { name: string }) {
    return (
        <div className="p-3 bg-black rounded-lg shadow-lg w-full max-w-full md:max-w-[580px]">
            <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between gap-3 w-full">

                <MapPin className="w-10 h-8 text-white" />

                <div className="flex flex-col flex-1 text-wrap">
                    <h1 className="text-white font-semibold">{name}</h1>
                    <p className="text-white text-sm">
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>

                <div className="mt-2 sm:mt-0">
                    <Badge
                        variant="secondary"
                        className="bg-green-500 text-white dark:bg-green-600"
                    >
                        <BadgeCheckIcon className="w-4 h-4" />
                        Open
                    </Badge>
                </div>

            </div>
        </div>

    );
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
                        attribution: "© Mitra Tedekat",
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
            center: [106.827153, -6.175392],
            zoom: 11,
        });

        locations.forEach((loc) => {
            const html = renderToString(<PopupContent name={loc.name} />);

            const popup = new maplibregl.Popup({ offset: 25, maxWidth: "500px", }).setHTML(html);

            new maplibregl.Marker({ color: "#06D6A0" })
                .setLngLat(loc.coordinates)
                .setPopup(popup)
                .addTo(map.current!);
        });
    }, [locations]);

    return (
        <div
            ref={mapContainer}
            className="md:w-[25vw] w-[70vw] h-[40vh] rounded-lg shadow-lg"
        />
    );
}
