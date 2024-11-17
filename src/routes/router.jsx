import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import Root from "../layout/root";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/start-learning",
        element: <StartLearning />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
