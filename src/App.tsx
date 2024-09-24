import React from "react";
import Cards from "./Components/Cards";
import { DataContextProvider } from "./Store/DataContextProvider";
import "./App.css";

/**
 * Main application component that wraps the application in the DataContextProvider.
 * This component is responsible for rendering the Cards component.
 *
 * @returns {JSX.Element} - The rendered application component.
 */
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
