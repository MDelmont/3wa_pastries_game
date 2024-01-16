import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import ContactPage from "../pages/contact";
import GamePage from "../pages/game";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import HeadNav from "../components/headNav";

/**
 * creat template of page with nav and content
 * @returns Template of page
 */
const Root = () => {
  return (
    <div>
        <HeadNav />
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
