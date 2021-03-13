import React from "react";
import ToolBar from "./components/tool-bar";
import { ToolBarProvider } from "./contexts/tool-bar";
import "./App.css";

// tool-bar component
// tool component

function App() {
  return (
    <div className="App">
      <ToolBarProvider>
        <ToolBar />
      </ToolBarProvider>
    </div>
  );
}

export default App;
