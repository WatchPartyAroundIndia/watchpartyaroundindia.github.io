import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import App2025 from "./2025/App.tsx";
import App2024 from "./2024/App.tsx";
import CityEventPage from "./components/city-event-page.tsx";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/2025",
      element: <App2025 />,
    },
    {
      path: "/2024",
      element: <App2024 />,
    },
    {
      path: "/:citySlug",
      element: <CityEventPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </React.StrictMode>
);
