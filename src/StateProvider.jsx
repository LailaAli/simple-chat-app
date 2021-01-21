import React, { createContext, useContext, useReducer } from "react";

// Data layer. Able to push/pull info from
export const StateContext = createContext();

// Allows access to data from anywhere in the app
// Reducer: listens to actions happening in the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
   </StateContext.Provider>
);

// Get user values from data layer
export const useStateValue = () => useContext(StateContext);

// Connect this data layer to app in index.js
