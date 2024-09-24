import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { sample } from "../Content/sample";

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
export interface LocalDataState {
  data: MenuItem[];
}

// Define action types
export interface Action {
  type: string;
  payload?: any; // Change 'any' to a more specific type if needed
}

// Initial state
const initialLocalData: LocalDataState = { data: [] };

// Create context
const DataContext = createContext<
  | {
      data: LocalDataState;
      updateData: (updateData: LocalDataState) => void;
    }
  | undefined
>(undefined);

// Define the reducer
const localDataReducer = (
  state: LocalDataState,
  action: Action
): LocalDataState => {
  switch (action.type) {
    case "update":
      // Implement your update logic here
      return { ...state, ...action.payload }; // Return the updated state
    default:
      return state;
  }
};

// Create provider component
const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [localData, localDataDispatch] = useReducer(
    localDataReducer,
    initialLocalData
  );

  const handleLocalDataUpdate = (updatedData: LocalDataState) => {
    localDataDispatch({ type: "update", payload: updatedData });
  };

  const dataCtx = {
    data: localData,
    updateData: handleLocalDataUpdate,
  };

  useEffect(() => {
    handleLocalDataUpdate(sample);
  }, []);

  return (
    <DataContext.Provider value={dataCtx}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
