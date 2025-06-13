import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Home/Home';
import MainPage from '../MainPage/MainPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);


export default router;