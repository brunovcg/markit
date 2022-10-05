import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyles";
import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";
import "react-date-range-ts/dist/styles.css";
import "react-date-range-ts/dist/theme/default.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
