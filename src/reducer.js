const reducer = (state, action) => {
  if (action.type === "SET_MOVE") {
    let newArray = [...state.boardArray];
    newArray[action.payload] = state.roundNo % 2;
    return { ...state, boardArray: [...newArray] };
  }
  if (action.type === "NEW_ROUND") {
    return { ...state, roundNo: state.roundNo + 1 };
  }

  if (action.type === "START_NEW_ROUND") {
    return {
      ...state,
      boardArray: Array(9).fill(null),
      winningPlayer: null,
      roundNo: 0,
    };
  }
  if (action.type === "START_NEW_GAME") {
    return {
      ...state,
      boardArray: Array(9).fill(null),
      playerOneScore: 0,
      playerTwoScore: 0,
      winningPlayer: null,
      roundNo: 0,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
