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
      arrayFull: false,
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
      arrayFull: false,
    };
  }
  if (action.type === "DECIDE_WINNER") {
    const decideWinner = () => {
      const squares = [...state.boardArray];
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (
          squares[a] !== null &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    };
    if (decideWinner() === 1) {
      return {
        ...state,
        playerOneScore: state.playerOneScore + 0.5,
        winningPlayer: 1,
      };
    } else if (decideWinner() === 0) {
      return {
        ...state,
        playerTwoScore: state.playerTwoScore + 0.5,
        winningPlayer: 2,
      };
    } else {
      return { ...state };
    }
  }

  if (action.type === "CHECK_FULL") {
    if (state.boardArray.includes(null)) {
      return { ...state };
    } else return { ...state, arrayFull: true };
  }
  if (action.type === "AI_MOVE") {
    let indexArray = state.boardArray
      .map((value, index) => (value === null ? index : undefined))
      .filter((x) => x);
    console.log(indexArray);
    const random = Math.floor(Math.random() * indexArray.length);
    const pickedIndex = indexArray[random];
    // console.log(pickedIndex);
    let newArray = [...state.boardArray];

    newArray[pickedIndex] = state.roundNo % 2;
    return { ...state, boardArray: [...newArray] };
  }

  if (action.type === "AI_TURN") {
    return { ...state, AI: true };
  }
  if (action.type === "REMOVE_AI_TURN") {
    return { ...state, AI: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
