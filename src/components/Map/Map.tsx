import React, { FC, useRef, useState, useEffect } from "react";
import styles from "./Map.module.scss";
import mapboxgl from "mapbox-gl";

export const Map: FC = () => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = `${process.env.REACT_APP_MAP_API_KEY}`;

    const attachMap = (
      setMap: React.Dispatch<React.SetStateAction<any>>,
      mapDiv: React.RefObject<HTMLDivElement>
    ) => {
      if (!mapDiv.current) {
        return;
      }
      const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [37.1942, 55.9958],
        zoom: 12,
        attributionControl: false,
      });
      setMap(map);
    };

    !map && attachMap(setMap, mapDiv);
  }, [map]);

  return <div className={styles.mapContainer} ref={mapDiv} />;
};
