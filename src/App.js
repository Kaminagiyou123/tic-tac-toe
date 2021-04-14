import "./App.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useProductsContext } from "./Context";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const {
    setMove,
    newRound,
    boardArray,
    startNewRound,
    startNewGame,
  } = useProductsContext();

  useEffect(() => {
    newRound();
  }, [boardArray]);
  return (
    <div className='App'>
      <h3 className='main-title'>Tic-Tac-Toe</h3>
      <div className='result-container'>
        <div className='result-player'>
          <h3>Player 1</h3>
          <h3>Score:0</h3>
        </div>
        <div className='result-notice'>
          <h4>Player 1 wins!</h4>
        </div>
        <div className='result-player'>
          <h3>Player 2</h3>
          <h3>Score:0</h3>
        </div>
      </div>
      <div className='ttt-board'>
        {array.map((item) => {
          return (
            <button
              className='item'
              data-id={item}
              onClick={(e) => {
                const clickId = e.target.dataset.id;

                e.preventDefault();
                setMove(parseInt(clickId - 1));
              }}
            >
              {boardArray[parseInt(item) - 1] === 1 && (
                <FontAwesomeIcon icon={faTimes} className='fa' size='4x' />
              )}
              {boardArray[parseInt(item) - 1] === 0 && (
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
