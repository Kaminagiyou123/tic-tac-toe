const reducer = (state, action) => {
  if (action.type === "SET_MOVE") {
    let newArray = [...state.boardArray];
    newArray[action.payload] = state.roundNo % 2;
    return { ...state, boardArray: [...newArray] };
  }
  if (action.type === "NEW_ROUND") {
    return { ...state, roundNo: state.roundNo + 1 };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
