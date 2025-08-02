import GameState from "./GameState";

function TicTacToe() {
  const {board, handleClick, resetGame, getStatusMessage} = GameState();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((squareState, index) => {
          return (
            <button
              className="square"
              key={index}
              onClick={() => handleClick(index)}
              disabled={squareState !== null}
            >
              {squareState}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;