import React from "react";
import ReactDOM from "react-dom";
import { KeepOnPage } from "./KeepOnPage";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    KeepOnPage();
  }

  render() {
    return <div> hey </div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
