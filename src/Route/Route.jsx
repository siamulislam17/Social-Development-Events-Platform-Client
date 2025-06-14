import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Home/Home';
import MainPage from '../MainPage/MainPage';
import Login from '../LogIn/Login';
import SignUp from '../Sign Up/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ],
  },
]);


export default router;