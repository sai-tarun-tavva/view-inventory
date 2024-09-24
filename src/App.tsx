import React from "react";
import Cards from "./Components/Cards";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataContextProvider } from "./Store/DataContextProvider";
import "./App.css";

const queryClient = new QueryClient();

/**
 * Main application component that wraps the application in the DataContextProvider.
 * This component is responsible for rendering the Cards component.
 *
 * @returns {JSX.Element} - The rendered application component.
 */
const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <main className="App">
          <Cards />
        </main>
      </DataContextProvider>
    </QueryClientProvider>
  );
};

App.displayName = "App";
export default App;
