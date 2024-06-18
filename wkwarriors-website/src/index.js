import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "./App.css";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import ErrorPage from "./error-page";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import TeamLeader from "./Pages/Team/TeamLeaders";
import Stats from "./Pages/Team/Stats";
import Schedule from "./Pages/Schedule";
import PrintableSchedule from "./Pages/Schedule/PrintableSchedule";
import News from "./Pages/News";
import Pictures from "./Pages/News/Pictures";
import Videos from "./Pages/News/Videos";
import Shop from "./Pages/Shop";


const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "roster",
        element: <Team />,
      },
      {
        path: "teamleaders",
        element: <TeamLeader />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "printableschedule",
        element: <PrintableSchedule />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "pictures",
        element: <Pictures />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
