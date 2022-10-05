import styled from "styled-components";

export const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    color: var(--secondary);
  }

  select {
    border: 1px solid var(--border);
    height: 30px;
    width: 300px;
    padding-left: 5px;
    color: var(--dark-font);
  }
`;
