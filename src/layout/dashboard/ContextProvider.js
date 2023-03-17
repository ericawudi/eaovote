import { createContext, useContext } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

function ContextProvider({ children }) {
  const handleDateChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DataContext.Provider value={{ handleDateChange }}>
      {children}
    </DataContext.Provider>
  );
}

export default ContextProvider;
