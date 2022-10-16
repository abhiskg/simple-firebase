import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
