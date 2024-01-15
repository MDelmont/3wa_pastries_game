import React, { useEffect } from "react";
import { requestPastriesWon } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";

function GamePage() {
  const dispatch = useDispatch();
  const { pastriesWon } = useSelector((store) => store.gameSliceReducer);

  const handleClick = () => {
    dispatch(requestPastriesWon(2));
    console.log(pastriesWon);
  };
  return (
    <>
      <h1>Game</h1>
      <button onClick={handleClick}>Lancer les dés</button>
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
