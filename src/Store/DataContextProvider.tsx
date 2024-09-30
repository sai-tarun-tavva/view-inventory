import React, { createContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

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

// Create context
export const DataContext = createContext<
  | {
      data: LocalDataState;
      isLoading: Boolean;
      error: String | null;
    }
  | undefined
>(undefined);

// Fetch function
const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const response = await fetch(
    "https://85f79533-a5a4-4bc2-a193-1373ace33857.mock.pstmn.io/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "bc-id": "your-business-channel-id", // Replace with your actual bc-id
        "device-id": "your-device-id", // Replace with your actual device-id logic
      },
    }
  );

  if (!response.ok) {
    throw new Error("Could not fetch items.");
  }

  const result = await response.json();
  return result.data; // Extracting the `data` array from API response
};

// Create provider component to wrap around the application
const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["menuItems"],
    queryFn: fetchMenuItems,
    initialData: [],
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  const dataCtx = {
    data,
    isLoading: isFetching,
    error: error ? error.message : null,
  };

  return (
    <DataContext.Provider value={dataCtx}>{children}</DataContext.Provider>
  );
};

export { DataContextProvider };
