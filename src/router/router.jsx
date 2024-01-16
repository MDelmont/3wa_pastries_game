import {
  createBrowserRouter,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import GamePage from "../pages/game";
import ContactPage from "../pages/contact";
import "../styles/header.scss";
/**
 * creat template of page with nav and content
 * @returns Template of page
 */
const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Login">login</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Game</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <GamePage />,
      },
      {
        path: "Home",
        element: <HomePage />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
    ],
  },
]);
