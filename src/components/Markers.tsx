import { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const Markers = ({ data }: any) => {
  const map = useMap();

  useEffect(() => {
    if (!data || data.length === 0) {
      map.fitWorld();
      return;
    }

    const coords = data.map(
      ({ pad }: any) =>
        [Number(pad.latitude), Number(pad.longitude)] as LatLngTuple
    );
    map.fitBounds(coords);
  }, [map, data]);

  return (
    <>
      {data?.map((launch: any) => {
        const { latitude, longitude } = launch.pad;

        return (
          <Marker
            key={launch.id}
            position={[Number(latitude), Number(longitude)]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;
