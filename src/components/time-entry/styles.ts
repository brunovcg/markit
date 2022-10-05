import styled from "styled-components";
import { ITimeEntriesStyles } from "./types";

export const StyledTimeEntries = styled.section<ITimeEntriesStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  border: ${(props) =>
    props.showConfirm ? "1px dashed var(--border)" : "none"};
  padding: ${(props) => (props.showConfirm ? "5px" : "0")};

  .time {
    font-size: 25px;
    color: var(--dark-font);
    font-family: var(--text-font);
  }
`;
