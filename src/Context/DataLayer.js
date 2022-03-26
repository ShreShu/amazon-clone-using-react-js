import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useDataLayerValue = () => useContext(StateContext);
