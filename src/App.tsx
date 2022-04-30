import { addMonths } from "date-fns";
import React from "react";
import { useGetLaunchesQuery } from "./services/launch";

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
      {data?.map((data) => (
        <div key={data.id}>{data.name + data.window_start}</div>
      ))}
    </div>
  );
}

export default App;
