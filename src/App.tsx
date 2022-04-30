import { addMonths } from "date-fns";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useGetLaunchesQuery } from "./services/launch";
import Markers from "./components/Markers";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addMonths(startDate, 3));

  const { data, isFetching } = useGetLaunchesQuery({
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  });

  const handleStartDateChange = (e: any) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e: any) => {
    setEndDate(new Date(e.target.value));
  };

  const startDateValue = startDate.toISOString().split("T")[0];
  const endDateValue = endDate.toISOString().split("T")[0];

  return (
    <div className="page">
      <div className="controlPanel">
        <div className="inputWrapper">
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            id="startDate"
            onChange={handleStartDateChange}
            max={endDateValue}
            value={startDateValue}
            disabled={isFetching}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="endDate">End date</label>
          <input
            type="date"
            id="endDate"
            onChange={handleEndDateChange}
            min={startDateValue}
            value={endDateValue}
            disabled={isFetching}
          />
        </div>
        {isFetching && <div className="loadingIndicator">Loading...</div>}
      </div>
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
