import App from "../App.js";
import { createBrowserRouter } from "react-router-dom";
import { Creadores } from "../pages/Creadores";
import { Documentacion } from "../pages/Documentacion";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creadores",
    element: <Creadores />,
  },
  {
    path: "/documentacion",
    element: <Documentacion />,
  },
]);
