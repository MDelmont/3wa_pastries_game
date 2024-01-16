import "../styles/loginPage.scss";

import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updatePassword } from "../store/loginSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.loginSliceReducer);

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", login, "Password:", password);
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
