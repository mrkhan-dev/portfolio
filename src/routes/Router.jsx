import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

export default router;
