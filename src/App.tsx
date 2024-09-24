import React from "react";
import Cards from "./Components/Cards";
import { DataContextProvider } from "./Store/DataContextProvider";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <DataContextProvider>
      <main className="App">
        <Cards />
      </main>
    </DataContextProvider>
  );
};

App.displayName = "App";
export default App;
