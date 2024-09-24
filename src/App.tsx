import React from "react";
import Cards from "./Components/Cards";
import { DataContextProvider } from "./Store/DataContextProvider";
import { handleFullScreen } from "./utilities";
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
      <main onDoubleClick={handleFullScreen} className="App">
        <Cards />
      </main>
    </DataContextProvider>
  );
};

App.displayName = "App";
export default App;
