import { ITimeEntry } from "./types";
import Button from "../button";
import Icon from "../icon";
import { StyledTimeEntries } from "./styles";
import { dateHelpers } from "../../helpers/dataHelpers";

function TimeEntry({ date }: ITimeEntry) {
  const { getDateTime } = dateHelpers;
  return (
    <StyledTimeEntries>
      <div className="time">{getDateTime(date)}</div>
      <Button
        onClick={() => {}}
        name={<Icon icon="delete" />}
        round
        variant="tertiary"
        size="fit-content"
      />
    </StyledTimeEntries>
  );
}

export default TimeEntry;
