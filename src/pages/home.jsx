import { useEffect } from "react";
import { requestPastries } from "../store/pastriesSlices";
import { useDispatch, useSelector } from "react-redux";
import CardPastries from "../components/cardPastries";
import { Link } from "react-router-dom";
import "../styles/home.scss";
const  HomePage = ()  => {
  const dispatch = useDispatch();
  const { pastries } = useSelector((store) => store.pastriesSliceReducer);

  useEffect(() => {
    dispatch(requestPastries());
  }, []);
  return (
    <div className="home-Page">
      <div className="title">
        <h1>
          Tentez de remporter une ou plusieurs patisseries avec notre jeu de
          yam's
        </h1>
        <Link to="http://localhost:5173">
          <button>Jouer</button>
        </Link>
      </div>
      <h2>Stock des Patisseries:</h2>
      <div className="pastries-list">
        {pastries.length > 0 &&
          pastries.map((pastrie) => (
            <div key={pastrie.id}>
              
              <CardPastries
              id={pastrie.id}
              titre={pastrie.name}
              chiffre={pastrie.quantity}
            />
         
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
