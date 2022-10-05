import styled from "styled-components";

export const StyledSectionButton = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 30px 0;

  .dashed {
    font-size: 40px;
    color: var(--secondary);
  }

  h2 {
    color: var(--light-font);
    font-family: var(--text-font);
    font-weight: 700;
    font-size: 30px;
    margin: 30px 10px;
  }
`;
