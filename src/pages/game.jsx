import React, { useEffect } from "react";
import { requestPastriesWon } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/game.css";

function GamePage() {
  const dispatch = useDispatch();
  const { pastriesWon } = useSelector((store) => store.gameSliceReducer);

  const handleClick = () => {
    dispatch(requestPastriesWon(2));
    console.log(pastriesWon);
  };

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      images.push(<img class='de' key={i} src={`/assets/images/de${i+1}.jpg`} alt={`Dé ${i + 1}`} />);
    }
    return images;
  };

  return (
    <>
      <h1>Game</h1>
      {renderImages()}
      <div className="container">
      <button onClick={handleClick}>Lancer les dés</button>
      </div>
      <ul>
        {pastriesWon.length > 0 &&
          pastriesWon.map((pastrie, index) => (
            <li key={pastrie.id}>
              {pastrie.name} : {pastrie.quantityWon}
            </li>
          ))}
      </ul>
    </>
  );
}

export default GamePage;
