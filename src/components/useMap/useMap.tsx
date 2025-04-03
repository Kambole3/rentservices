import { useEffect, useState, useRef, MutableRefObject } from 'react';
import leaflet, { Map, TileLayer } from 'leaflet';
import { City } from '../../types/map';
import { CityOffer } from '../../types/offer';


// interface City {
//   lat: number;
//   lng: number;
//   zoom: number;
// }

type UseMapProps ={
    city: CityOffer;
    mapRef: React.RefObject<HTMLDivElement | null>; 
}

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityOffer | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && city?.location) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: 8
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap ;
