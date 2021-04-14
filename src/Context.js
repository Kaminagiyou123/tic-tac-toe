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

  const startNewRound = () => {
    dispatch({ type: "START_NEW_ROUND" });
  };
  const startNewGame = () => {
    dispatch({ type: "START_NEW_GAME" });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setMove,
        newRound,
        startNewRound,
        startNewGame,
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
