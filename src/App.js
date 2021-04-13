import "./App.css";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
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
          return <button className='item'>{item}</button>;
        })}
      </div>
      <div className='game-container'>
        <button className='new-g-btn'> New Round</button>
        <button className='new-g-btn'> New Game </button>
      </div>
    </div>
  );
}

export default App;
