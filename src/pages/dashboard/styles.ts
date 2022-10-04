import styled from "styled-components";

const StyledDashboard = styled.div`
  h2 {
    margin: 30px 0;
    color: var(--primary);
    font-family: var(--text-font);
    font-size: 40px;
  }
  .dashboard-button {
    margin-top: 10px;
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
