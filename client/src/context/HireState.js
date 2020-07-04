import React, { createContext, useReducer } from "react";
import HireReducer from "./HireReducer";
import { AxiosGetData } from "../services/AxiosConfig";

const initialState = {
  transactionCost: [],
  error: null,
  loading: true,
  responseMessage: "",
};

//create context
export const HireContext = createContext(initialState);

//provider component
export function HireProvider({ children }) {
  const [state, dispatch] = useReducer(HireReducer, initialState);

  //Actions
  async function getTransactionCost() {
    try {
      const response = await AxiosGetData("getJobType", "");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: true,
        responseMessage: error.response.data.error,
      });
    }
  }

  return (
    <HireContext.Provider
      value={{
        transactionCost: state.transactionCost,
        error: state.error,
        loading: state.loading,
        responseMessage: state.responseMessage,
        getTransactionCost,
      }}
    >
      {children}
    </HireContext.Provider>
  );
}
