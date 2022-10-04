import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--transparent-dark);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    background-color: var(--main-background);
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    width: fit-content;
    min-width: 200px;
    min-height: 100px;
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: 8px;

    .header {
      display: flex;
      align-items: center;
      h2 {
        width: 100%;
        color: var(--dark-font);
        font-size: 20px;
      }

      span {
        margin-left: 30px;
        color: var(--dark-font);
      }
    }

    .content {
      width: 100%;
      margin: 20px 0 10px 0;
    }
  }
`;

export default ModalStyled;
