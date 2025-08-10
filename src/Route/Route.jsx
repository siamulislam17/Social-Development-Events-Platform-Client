import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Home/Home';
import MainPage from '../MainPage/MainPage';
import Login from '../LogIn/Login';
import SignUp from '../Sign Up/SignUp';
import CreateEventPage from '../Create event page/CreateEventPage';
import PrivateRoute from './PrivateRoute';
import EventDetails from '../EventDetails/EventDetails';
import JoinPage from '../Join Page/JoinPage';
import ManageEvent from '../Manage Event/ManageEvent';
import Blog from '../Blogs/Blogs';


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
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/create-event',
        element: <PrivateRoute><CreateEventPage /></PrivateRoute>
      },
      {
        path: '/event/:id',
        element: <PrivateRoute><EventDetails /></PrivateRoute>
      },
      {
        path: '/joined-events',
        element: <PrivateRoute><JoinPage /></PrivateRoute>
      },
      {
        path: '/manage-events',
        element: <PrivateRoute><ManageEvent></ManageEvent></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blog />
      }
      
    ],
  },
]);


export default router;