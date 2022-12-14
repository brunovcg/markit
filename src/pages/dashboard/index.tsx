import Button from "../../components/button";
import StyledDashboard from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { ITimeEntriesObject } from "../../providers/data/types";
import TimeEntries from "../../components/time-entry";
import { useState } from "react";
import { dateHelpers } from "../../helpers/dataHelpers";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../../providers/data";

function Dashboard() {
  const { createTimeEntry, getEntries } = useData();
  const navigate = useNavigate();
  const location = useLocation();
  const [editable, setEditable] = useState(false);

  const handleClick = () => navigate("/");

  const { categoryId } = location?.state;
  const { name, id: markId } = location?.state.mark;

  const [selectedDateFrom, setSelectedFrom] = useState<string>("");
  const [selectedDateTo, setSelectedTo] = useState<string>("");

  const { isEqual, isBetween } = dateHelpers;

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFrom(e.target.value);
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTo(e.target.value);
  };

  const handleEditable = () => setEditable(!editable);

  const filteredDates =
    getEntries(categoryId, markId).filter((item: ITimeEntriesObject) => {
      if (selectedDateFrom && selectedDateTo) {
        console.log(isBetween(selectedDateFrom, selectedDateTo, item?.date));
        return isBetween(selectedDateFrom, selectedDateTo, item?.date);
      }
      console.log(isEqual(selectedDateFrom, item?.date) || !selectedDateFrom);

      return isEqual(selectedDateFrom, item?.date) || !selectedDateFrom;
    });

  const handleAddEntry = () => {
    createTimeEntry(categoryId, markId, {
      id: uuidv4(),
      date: new Date().toISOString(),
    });
  };

  return (
    <StyledDashboard>
      <div className="back">
        <Button
          variant="secondary"
          name="Voltar"
          size="fit-content"
          onClick={handleClick}
          className="back-button"
        />
      </div>

      <h2>{name}</h2>

      <div className="option">
        <div className="dates">
          <label htmlFor="dashboard-input-from">
            Data
            <input
              id="dashboard-input-from"
              type="date"
              value={selectedDateFrom}
              onChange={handleChangeFrom}
            />
          </label>
          {selectedDateFrom && (
            <label htmlFor="dashboard-input-from">
              At??
              <input
                type="date"
                value={selectedDateTo}
                onChange={handleChangeTo}
              />
            </label>
          )}
        </div>
        <Button
          variant="secondary"
          name={editable ? "Cancelar" : "Apagar Entradas"}
          size="fit-content"
          onClick={handleEditable}
        />
      </div>
      <Button
        className="mark-button"
        onClick={handleAddEntry}
        name="Marcar!"
        variant="primary"
        size="large"
      />

      {filteredDates.map((item: ITimeEntriesObject) => (
        <div key={item.id}>
          <TimeEntries
            date={item.date}
            editable={editable}
            entryId={item.id}
            categoryId={categoryId}
            markId={markId}
          />
        </div>
      ))}

      {!filteredDates.length && (
        <div className="no-entries">Nenhuma entrada encontrada</div>
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
