import React from "react";
import Cards from "./Components/Cards";

import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Cards />
    </div>
  );
};

App.displayName = "App";
export default App;
