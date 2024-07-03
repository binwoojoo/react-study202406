import React from "react";
import Home from "./components/RouteExample/pages/home";
// import Products from "./components/RouteExample/pages/Products";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
// import ProductDetail from "./components/RouteExample/pages/ProductDetail";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "events/:eventId", element: <EventDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
