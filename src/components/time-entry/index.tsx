import { ITimeEntry } from "./types";
import Button from "../button";
import Icon from "../icon";
import { StyledTimeEntries } from "./styles";
import { dateHelpers } from "../../helpers/dataHelpers";
import { useState } from "react";
import { useData } from "../../providers/data";

function TimeEntry({
  date,
  editable,
  entryId,
  categoryId,
  markId,
}: ITimeEntry) {
  const { deleteTimeEntry } = useData();
  const { getDateTime } = dateHelpers;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowConfirm = () => setShowConfirm(!showConfirm);

  const handleDeleteTimeEntry = () => {
    deleteTimeEntry(categoryId, markId, entryId);
  };

  return (
    <StyledTimeEntries showConfirm={showConfirm && editable}>
      <div className="time">{getDateTime(new Date(date)).toString()}</div>
      {editable && (
        <Button
          onClick={handleShowConfirm}
          name={
            <Icon
              margin="0 0 0 0"
              icon={showConfirm && editable ? "arrow_back" : "delete"}
            />
          }
          round
          variant="tertiary"
          size="fit-content"
        />
      )}
      {showConfirm && editable && (
        <Button
          onClick={handleDeleteTimeEntry}
          name="Apagar"
          variant="primary"
          size="fit-content"
        />
      )}
    </StyledTimeEntries>
  );
}

export default TimeEntry;
