import { addMonths } from "date-fns";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useGetLaunchesQuery } from "./services/launch";
import Markers from "./components/Markers";

const startDate = new Date();
const endDate = addMonths(startDate, 3);

function App() {
  const { data, isLoading } = useGetLaunchesQuery({
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MapContainer scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers data={data} />
      </MapContainer>
    </div>
  );
}

export default App;
