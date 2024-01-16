import "../styles/loginPage.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updatePassword, loginWebSite } from "../store/loginSlice";
import { useEffect } from "react";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, auth } = useSelector(
    (state) => state.loginSliceReducer
  );

  useEffect(() => {
    if (auth) navigate(`/home`);
  }, [auth]);

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginWebSite({email, password}));

  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          <span>Mot de passe:</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
