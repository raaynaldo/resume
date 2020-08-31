import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Aux from "./hoc/Aux/Aux";
import "./App.css";
import Home from "./components/";

function App() {
  return (
    <Aux>
      <CssBaseline />
      <Home />
    </Aux>
  );
}

export default App;
