import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AuthProviders from "./components/providers/AuthProviders";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import BookingDetails from "./components/BookingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : "about",
        element : <About></About>
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "register",
        element : <Register></Register>
      },
      {
        path : "bookingDetails/:bookingID",
        element : <BookingDetails></BookingDetails>,
        loader : () => fetch('/rooms.json')
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);
