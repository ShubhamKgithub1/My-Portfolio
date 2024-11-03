import { createBrowserRouter } from "react-router-dom";
import App from './App';
import HomeContainer from './components/HomeContainer';
import Projects from './components/Projects';
import Skill from "./components/Skill";
import Qualifications from "./components/Qualifications";
import About from "./components/About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skill/>,
      },
      {
        path: "/qualifications",
        element: <Qualifications/>
      }
      ,
      {
        path: "/about",
        element: <About/>
      }
    ]
  }
]);

export default appRouter;
