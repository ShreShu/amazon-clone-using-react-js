import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { DataLayer } from "./Context/DataLayer";
import { initialState } from "./Context/InitialState";
import { reducer } from "./Context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
