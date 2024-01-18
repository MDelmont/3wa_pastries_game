import { useState, useEffect } from "react";
import { requestPastriesWon, resetGame } from "../store/gameSlice";
import { requestPastries } from "../store/pastriesSlices";
import CardPastries from "../components/cardPastries";
import { useDispatch, useSelector } from "react-redux";
import "../styles/game.scss";
import { updateRemainingAttempts } from "../store/gameSlice";
function GamePage() {
  const dispatch = useDispatch();
  const { pastriesWon, remainingAttempts } = useSelector(
    (store) => store.gameSliceReducer
  );
  const [diceResults, setDiceResults] = useState(Array(5).fill(1));
  const [stateResult, setStateResult] = useState();

  const { pastries } = useSelector((store) => store.pastriesSliceReducer);

  useEffect(() => {
    dispatch(requestPastries());
  }, [pastriesWon]);

  const handleClick = () => {
    const results = throwDices();
    setDiceResults(results);
    const nbPastriesWon = checkVictory(results);

    if (nbPastriesWon != 0) {
      dispatch(requestPastriesWon(nbPastriesWon));
      setStateResult(true);
    } else {
      setStateResult(false);
    }

    dispatch(updateRemainingAttempts(remainingAttempts - 1));
  };

  const checkVictory = (results) => {
    // Compter le nombre d'occurrences de chaque résultat
    const occurrences = results.reduce((acc, result) => {
      acc[result] = (acc[result] || 0) + 1;
      return acc;
    }, {});

    // Vérifier les conditions de victoire
    const values = Object.values(occurrences);

    if (values.some((count) => count === 2)) {
      if (values.filter((count) => count === 2).length === 2) {
        return 2; // Deux paires
      } else {
        return 1; // Paire
      }
    } else if (values.some((count) => count === 3)) {
      if (values.some((count) => count === 2)) {
        return 3; // Brelan avec une paire
      } else {
        return 2; // Brelan seul
      }
    } else if (values.some((count) => count === 4)) {
      return 3; // Carré
    }

    return 0; // Aucune condition de victoire
  };

  const renderImages = () => {
    return (
      diceResults &&
      diceResults.map((result, index) => (
        <img
          className="de"
          key={index}
          src={`/assets/images/de${result}.jpg`}
          alt={`Dé ${result}`}
        />
      ))
    );
  };

  const printResultState = () => {
    if (pastriesWon.length > 0 && stateResult) {
      return (
        <div>
          <p>Bravo, vous avez gagné :</p>
          <ul className="cont-pastries-won">
            {pastriesWon.map((pastrie, index) => (
              <li key={pastrie.id}>- 1 {pastrie.name}</li>
            ))}
          </ul>
        </div>
      );
    } else if (stateResult == false) {
      return <p>Dommage, vous avez perdu !</p>;
    } else {
      return null;
    }
  };

  const throwDices = () => {
    const results = [];

    // Simuler le lancer de 5 dés
    for (let i = 0; i < 5; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      results.push(diceResult);
    }
    return results;
  };

  const handleResetClick = (e) => {
    dispatch(resetGame());
    dispatch(updateRemainingAttempts(3));
  };
  return (
    <>
      <div className="container">
        <h1>Game</h1>
        <div className="cont-De">{renderImages()}</div>

        {remainingAttempts == 0 && (
          <button onClick={handleResetClick}>Relancer le jeux</button>
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
                  .map((pastrie) => (
                    <div key={pastrie.id}>
                      {CardPastries(
                        pastrie.id,
                        pastrie.name,
                        pastrie.quantityWon
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GamePage;
