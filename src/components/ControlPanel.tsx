import { useState } from "react";

type Filters = {
  endDate: string;
  startDate: string;
};

type ControlPanelProps = {
  isFetching: boolean;
  onSubmit(filters: Filters): void;
  defaultValues: Filters;
};

const ControlPanel = ({
  isFetching,
  onSubmit,
  defaultValues,
}: ControlPanelProps) => {
  const [startDate, setStartDate] = useState(new Date(defaultValues.startDate));
  const [endDate, setEndDate] = useState(new Date(defaultValues.endDate));

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
  };

  const startDateValue = startDate.toISOString().split("T")[0];
  const endDateValue = endDate.toISOString().split("T")[0];

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    onSubmit({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });
  };

  return (
    <form className="controlPanel" onSubmit={handleSubmit}>
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
      <button disabled={isFetching}>Submit</button>
      {isFetching && <div className="loadingIndicator">Loading...</div>}
    </form>
  );
};

export default ControlPanel;
