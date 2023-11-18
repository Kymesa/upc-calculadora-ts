import App from "../App.js";
import { createBrowserRouter } from "react-router-dom";
import { Creadores } from "../pages/Creadores";
import { Documentacion } from "../pages/Documentacion";
import ErrorPage from "../components/ErrorPage.js";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
