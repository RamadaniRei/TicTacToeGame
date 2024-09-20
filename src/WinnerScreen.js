const WinnerScreen = ({ restartGame, playerWon }) => {
  const winnerColor =
    playerWon === "🟡" ? "yellow" : playerWon === "❌" ? "red" : "orange"; // Orange for draw

  return (
    <div className="winner">
      <h2 className="congo" style={{ color: winnerColor }}>
        {playerWon === "No One" ? "Oops! It's a Draw" : "Congratulations"}
      </h2>
      <h3 className="player">
        {playerWon === "No One" ? "" : `${playerWon} Won the game`}
      </h3>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default WinnerScreen;
