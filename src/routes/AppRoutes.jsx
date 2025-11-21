import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Recommend from "../pages/Recommend";
import Connection from "../pages/Connection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "recomendar/:id", element: <Recommend /> },
      { path: "conectar", element: <Connection /> },
    ],
  },
]);