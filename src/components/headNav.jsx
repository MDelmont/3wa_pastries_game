import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutWebSite } from "../store/loginSlice";
import "../styles/header.scss";
const HeadNav = (id, titre, chiffre) => {
  const { auth } = useSelector((state) => state.loginSliceReducer);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutWebSite);
  };

  return (
    <header>
      <nav>
        <ul className="primary-nav">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Login">admin</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Game</Link>
          </li>
        </ul>

        {auth && (
          <ul className="logout-nav">
            <li style={{ marginLeft: "auto" }}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeadNav;
