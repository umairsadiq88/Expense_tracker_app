import React, { createContext, useReducer } from "react";

// Import the Reducer
import AppReducer from "./AppReducer";

// Create the initial state
const initialState = {
  transactions: [{ id: 1, transactionAmount: 1000, description: "Salary" }],
};

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for Transactions

  // Delete Existing Transaction Action
  function delTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Add New Transaction Action
  function addTransaction(payload) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload 
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
