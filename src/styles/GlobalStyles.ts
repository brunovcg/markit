import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  :root {
    --primary: #23d146;
    --secondary: #5d9aef;
    --tertiary: #f28c9f;
    --light-font: #fff;
    --dark-font: #727272;
    --main-background: #fff;

    --title-font:  'Titan One', cursive;
    --text-font: 'Titillium Web', sans-serif ;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-size: 1rem;
      vertical-align: baseline;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1;
    }

    .App{
      background-color: var(--secondary);
      display: flex;justify-content: center;

      >*{
        width: 80vw;
        background-color: var(--main-background);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    h1{
      font-family: var(--title-font);
      font-size: 40px;
      color: var(--secondary);
    }

    ol, ul {
	    list-style: none;
    }
    
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
    }

`;

export default GlobalStyle;
