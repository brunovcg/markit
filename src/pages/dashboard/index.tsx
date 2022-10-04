import Button from "../../components/button";
import StyledDashboard from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { IEntries } from "../../providers/data/types";
import TimeEntries from "../../components/time-entry";
import { useState } from "react";
import { dateHelpers } from "../../helpers/dataHelpers";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => navigate("/");

  const { name, entries } = location?.state.mark;

  const [selectedDate, setSelected] = useState<string>("");

  const { isEqual } = dateHelpers;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const filteredDates = entries?.filter(
    (item: IEntries) =>
      isEqual(selectedDate, item.date.toISOString()) || !selectedDate
  );

  return (
    <StyledDashboard>
      <Button
        variant="secondary"
        name="Voltar"
        size="fit-content"
        onClick={handleClick}
        className="dashboard-button"
      />

      <h2>{name}</h2>

      <input type="date" value={selectedDate} onChange={handleChange} />

      {filteredDates.map((item: IEntries) => (
        <div key={item.id}>
          <TimeEntries date={item.date} />
        </div>
      ))}
      {!filteredDates.length && (
        <div className="no-entries">Nenhuma entrada encontrada</div>
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
