import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import Root from "../layout/root";
import Login from "../pages/Login";
import VocabularyDetails from "../components/VocabularyDetails";
import Lesson from "../pages/Lesson";
import PrivateProvider from "./PrivateProvider";
import MyProfile from "../pages/MyProfile";

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
      {
        path: "/vocabularies/:id", // Dynamic route for vocabulary details
        element: <VocabularyDetails />,
      },
      {
        path: "/lesson/:id", // Dynamic route for vocabulary details
        element: (
          <PrivateProvider>
            <Lesson />
          </PrivateProvider>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateProvider>
            <div>
              <MyProfile />
            </div>
          </PrivateProvider>
        ),
      },
    ],
  },
]);

export default router;
