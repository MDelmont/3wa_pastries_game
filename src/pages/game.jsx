import React, { useEffect, useState } from "react";
import { requestPastriesWon } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/game.css";

function GamePage() {
  const dispatch = useDispatch();
  const { pastriesWon } = useSelector((store) => store.gameSliceReducer);
  const [diceResults, setDiceResults] = useState(Array(5).fill(1));

  const handleClick = () => {
    const results = throwDices();
    setDiceResults(results);
    //dispatch(requestPastriesWon(results));
  };

  const renderImages = () => {
    return diceResults && diceResults.map((result, index) => (
      <img
        className='de'
        key={index}
        src={`/assets/images/de${result}.jpg`}
        alt={`Dé ${result}`}
      />
    ));
  };

  const throwDices = () => {
    const results = [];

    // Simuler le lancer de 5 dés
    for (let i = 0; i < 5; i++) {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      results.push(diceResult);
    }

    console.log("Résultats des dés :", results);
    return results;
  };

  return (
    <>
      <div className="container">
      <h1>Game</h1>
      {renderImages()}
      <button onClick={handleClick}>Lancer les dés</button>
      <ul>
        {pastriesWon.length > 0 &&
          pastriesWon.map((pastrie, index) => (
            <li key={pastrie.id}>
              {pastrie.name} : {pastrie.quantityWon}
            </li>
          ))}
      </ul>
      </div>
    </>
  );
}

export default GamePage;
