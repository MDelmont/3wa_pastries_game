import CardPastries from "../components/cardPastries";
import "../styles/game.scss";
import useGame from "../hook/useGame";

const GamePage = () => {
  const {
    pastries,
    remainingAttempts,
    renderImages,
    printResultState,
    startGame,
    resetGame,
  } = useGame();

  const handleClick = (e) => {
    startGame();
  };
  const handleResetClick = (e) => {
    resetGame();
  };
  return (
    <>
      <div className="container">
        <h1>Game</h1>
        <div className="cont-De">{renderImages()}</div>

        {remainingAttempts == 0 && (
          <button onClick={handleResetClick}>Relancer le jeu</button>
        )}

        {remainingAttempts != 0 && (
          <button onClick={handleClick} disabled={remainingAttempts === 0}>
            Lancer les dés ({remainingAttempts} essais restants)
          </button>
        )}
        <div>{printResultState()}</div>
        <div>
          {pastries.length > 0 && (
            <div>
              <h2>Patisseries gagnées:</h2>
              <div className="pastries-list">
                {pastries
                  .filter((pastrie) => pastrie.quantityWon > 0)
                  .map((pastrie, index) => (
                    <div key={index}>
                      {
                        <CardPastries
                          id={pastrie.id}
                          titre={pastrie.name}
                          chiffre={pastrie.quantityWon}
                        />
                      }
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GamePage;
