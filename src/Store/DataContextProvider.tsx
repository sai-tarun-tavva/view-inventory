import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { sample, updateSampleData } from "../Content/sample";

// Define the shape of a single item
export interface MenuItem {
  id: number;
  name: string;
  icon: string;
  orderCount: number;
  stock: number;
  remainStock: number;
}

// Define the shape of context state
export type LocalDataState = MenuItem[];

// Define action types
export interface Action {
  type: string;
  payload?: any;
}

// Initial state
const initialLocalData: LocalDataState = [];

// Create context
export const DataContext = createContext<
  | {
      data: LocalDataState;
      updateData: (updateData: LocalDataState) => void;
    }
  | undefined
>(undefined);

// Define the reducer function to manage state updates
const localDataReducer = (
  state: LocalDataState,
  action: Action
): LocalDataState => {
  switch (action.type) {
    case "update":
      // Update the local data state with new data from the payload
      return [...action.payload];
    default:
      return state; // Return current state for unrecognized action types
  }
};

// Create provider component to wrap around the application
const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [localData, localDataDispatch] = useReducer(
    localDataReducer,
    initialLocalData
  );

  /**
   * Dispatch updated data to the reducer.
   * @param {LocalDataState} updatedData - The updated data to set in the context state.
   */
  const handleLocalDataUpdate = (updatedData: LocalDataState) => {
    localDataDispatch({ type: "update", payload: updatedData });
  };

  const dataCtx = {
    data: localData,
    updateData: handleLocalDataUpdate,
  };

  useEffect(() => {
    // Initialize the state with the sample data
    handleLocalDataUpdate(sample.data);

    // Set an interval to update the sample data every 5 seconds
    const interval = setInterval(() => {
      updateSampleData(); // Update the sample data
      handleLocalDataUpdate(sample.data); // Dispatch the updated sample data to context
    }, 500); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <DataContext.Provider value={dataCtx}>{children}</DataContext.Provider>
  );
};

export { DataContextProvider };
