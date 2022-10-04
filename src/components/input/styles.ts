import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    color: var(--secondary);
  }

  input {
    border: 1px solid var(--border);
    padding-left: 5px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;
