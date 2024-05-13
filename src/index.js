import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/scss/global.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/page/home/index";
import Ranking from "./page/ranking";
import LeaderBorad from "./page/leaderBorad";
import LuckyDraw from "./page/luckyDraw";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBorad />,
  },
  {
    path: "/lucky-draw",
    element: <LuckyDraw />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
