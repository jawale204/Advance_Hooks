import { useReducer, createContext } from "react";
import { ExampleReducer } from "./ExampleReducer";

const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(ExampleReducer, initialState);

  return (
    <ExampleContext.Provider value={{ count: state.count, dispatch }}>
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleContext;
