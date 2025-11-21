import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Recomendar from "../pages/Recomendar";
import Conectar from "../pages/Conectar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "recomendar/:id", element: <Recomendar /> },
      { path: "conectar", element: <Conectar /> },
    ],
  },
]);