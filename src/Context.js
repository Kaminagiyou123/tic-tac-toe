import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  boardArray: Array(9).fill(null),
  playerOneScore: 0,
  playerTwoScore: 0,
  winningPlayer: null,
  roundNo: 0,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setMove = (item) => {
    dispatch({ type: "SET_MOVE", payload: item });
  };
  const newRound = () => {
    dispatch({ type: "NEW_ROUND" });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setMove,
        newRound,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
