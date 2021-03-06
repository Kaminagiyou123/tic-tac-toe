import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  boardArray: Array(9).fill(null),
  playerOneScore: 0,
  playerTwoScore: 0,
  winningPlayer: null,
  roundNo: 0,
  arrayFull: false,
  AI: false,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const aiMove = () => {
    dispatch({ type: "AI_MOVE" });
  };
  const checkArrayFull = () => {
    dispatch({ type: "CHECK_FULL" });
  };
  const setMove = (item) => {
    dispatch({ type: "SET_MOVE", payload: item });
  };
  const newRound = () => {
    dispatch({ type: "NEW_ROUND" });
  };
  const setAIturn = () => {
    dispatch({ type: "AI_TURN" });
  };
  const removeAIturn = () => {
    dispatch({ type: "REMOVE_AI_TURN" });
  };

  const startNewRound = () => {
    dispatch({ type: "START_NEW_ROUND" });
  };
  const startNewGame = () => {
    dispatch({ type: "START_NEW_GAME" });
  };
  const decideWinner = () => {
    dispatch({ type: "DECIDE_WINNER" });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setMove,
        newRound,
        startNewRound,
        startNewGame,
        decideWinner,
        checkArrayFull,
        aiMove,
        setAIturn,
        removeAIturn,
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
