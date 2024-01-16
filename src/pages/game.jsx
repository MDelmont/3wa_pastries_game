import React, { useEffect, useState } from "react";
import { requestPastriesWon } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/game.scss";

function GamePage() {
  const dispatch = useDispatch();
  const { pastriesWon } = useSelector((store) => store.gameSliceReducer);
  const [diceResults, setDiceResults] = useState(Array(5).fill(1));
  const [remainingAttempts, setRemainingAttempts] = useState(3);

  const handleClick = () => {
    const results = throwDices();
    setDiceResults(results);
    const nbPastriesWon = checkVictory(results);

    if (nbPastriesWon != 0) {
      dispatch(requestPastriesWon(nbPastriesWon));
    } else {
      console.log("Vous n'avez rien gagné... Retentez votre chance !");
    }

    setRemainingAttempts(remainingAttempts - 1);

    if (remainingAttempts === 1) {
      console.log("Dernier essai !");
    }

    if (remainingAttempts === 0) {
      console.log("Fin des essais. Désactivez le bouton ici.");
    }
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

  const throwDices = () => {
    const results = [];

    // Simuler le lancer de 5 dés
    for (let i = 0; i < 5; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      results.push(diceResult);
    }
    return results;
  };

  return (
    <>
      <div className="container">
        <h1>Game</h1>
        <div className="cont-De">{renderImages()}</div>
        <button onClick={handleClick} disabled={remainingAttempts === 0}>
          Lancer les dés ({remainingAttempts} essais restants)
        </button>
        <div>
          <ul className="cont-pastries-won">
            {pastriesWon.length > 0 &&
              pastriesWon.map((pastrie, index) => (
                <li key={pastrie.id}>
                  {pastrie.name} : {pastrie.quantityWon}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GamePage;
