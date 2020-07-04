export default function (state, action) {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactionCost: action.payload,
      };

    case "ADD_CONTRACT":
      return {
        ...state,
        loading: false,
        responseMessage: action.payload,
      };
      
    case "TRANSACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        responseMessage: action.responseMessage,
      };
    default:
      return state;
  }
}
