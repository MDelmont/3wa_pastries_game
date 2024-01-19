import { useState, useEffect } from "react";
import { requestPastriesWon,resetGame } from "../store/gameSlice";
import { requestPastries } from "../store/pastriesSlices";
import { useDispatch, useSelector } from "react-redux";
import "../styles/game.scss";
import { updateRemainingAttempts } from "../store/gameSlice";
import imgDolphin from "../assets/dolphin.gif";

/**
 * Fonctionnement du jeux de dé
 * @returns pastries, remainingAttempts, renderImages, printResultState, startGame, ResetClick
 */
const useGame = () => {
  const { pastriesWon, remainingAttempts } = useSelector(
    (store) => store.gameSliceReducer
  );
  const [diceResults, setDiceResults] = useState(Array(5).fill(1));
  const [stateResult, setStateResult] = useState();
  const { pastries } = useSelector((store) => store.pastriesSliceReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPastries());
  }, [pastriesWon]);
  useEffect(() => {
    if (remainingAttempts == 3) {
      dispatch(resetGame());
    }
  }, []);

  const startGame = () => {
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
      return (
        <div>
          <img src={imgDolphin} alt="dolphin" />
          <br />
          <p>Dommage, vous avez perdu !</p>
        </div>
      );
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

  const resetGamehook = () => {
    dispatch(resetGame());
    dispatch(updateRemainingAttempts(3));
    setStateResult(true);
  };

  return {
    pastries,
    remainingAttempts,
    renderImages,
    printResultState,
    startGame,
    resetGamehook,
  };
};
export default useGame;
