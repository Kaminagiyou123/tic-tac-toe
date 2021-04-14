import "./App.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useProductsContext } from "./Context";
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const {
    checkArrayFull,
    winningPlayer,
    setMove,
    newRound,
    boardArray,
    startNewRound,
    startNewGame,
    playerOneScore,
    playerTwoScore,
    decideWinner,
    arrayFull,
  } = useProductsContext();

  useEffect(() => {
    newRound();
    decideWinner();
    checkArrayFull();
  }, [boardArray]);
  return (
    <div className='App'>
      <h3 className='main-title'>Tic-Tac-Toe</h3>
      <div className='result-container'>
        <div className='result-player'>
          <h3>Player 1</h3>
          <h3>Score:{playerOneScore}</h3>
        </div>
        <div className={winningPlayer ? "result-notice" : "result-notice-hide"}>
          <h4>Player {winningPlayer} wins!</h4>
        </div>
        <div className='result-player'>
          <h3>Player 2</h3>
          <h3>Score:{playerTwoScore}</h3>
        </div>
      </div>
      <div className='ttt-board'>
        {!winningPlayer &&
          !arrayFull &&
          array.map((item) => {
            return (
              <button
                className='item'
                data-id={item}
                onClick={(e) => {
                  const clickId = e.target.dataset.id;
                  e.preventDefault();
                  setMove(parseInt(clickId));
                }}
              >
                {boardArray[parseInt(item)] === 1 && (
                  <FontAwesomeIcon icon={faTimes} className='fa' size='4x' />
                )}
                {boardArray[parseInt(item)] === 0 && (
                  <FontAwesomeIcon icon={faCircle} size='4x' className='fa' />
                )}
              </button>
            );
          })}
      </div>
      <div className='game-container'>
        <button className='new-g-btn' onClick={startNewRound}>
          {" "}
          New Round
        </button>
        <button className='new-g-btn' onClick={startNewGame}>
          {" "}
          New Game{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
