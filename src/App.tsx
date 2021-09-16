import React from "react";
import DetailCard from "./components/DetailCard/DetailCard";
import DetailForm from "./components/DetailForm/DetailForm";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <DetailCard />
      <DetailForm />
    </div>
  );
}

export default App;
