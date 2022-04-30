import { addMonths } from "date-fns";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useGetLaunchesQuery } from "./services/launch";
import Markers from "./components/Markers";
import ControlPanel from "./components/ControlPanel";

const defaultFilters = {
  startDate: new Date().toISOString(),
  endDate: addMonths(new Date(), 3).toISOString(),
};

function App() {
  const [filters, setFilters] = useState(defaultFilters);

  const { data, isFetching } = useGetLaunchesQuery(filters);

  return (
    <div className="page">
      <ControlPanel
        isFetching={isFetching}
        onSubmit={setFilters}
        defaultValues={defaultFilters}
      />
      <div className="mapWrapper">
        <MapContainer scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers data={data} />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
