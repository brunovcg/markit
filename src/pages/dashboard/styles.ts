import styled from "styled-components";

const StyledDashboard = styled.div`
  h2 {
    margin: 50px 0;
    color: var(--primary);
    font-family: var(--text-font);
    font-size: 50px;
  }

  label {
    display: flex;
    flex-direction: column;
    color: var(--dark-font)
  }
  .back {
    width: 100%;
    height: 1px;

    .back-button {
      margin-top: 8px;
      margin-left: 8px;
    }
  }
  .mark-button {
    margin-top: 20px;
  }

  .dates {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: var(--border);
    padding: 20px;
    border-radius: 18px;
  }

  .no-entries {
    color: var(--tertiary);
    font-size: 30px;
    margin-top: 50px;
    font-family: var(--text-font);
    font-weight: bold;
  }
`;

export default StyledDashboard;
