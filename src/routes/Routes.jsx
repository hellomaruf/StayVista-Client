import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashBoardLayouts from "../layouts/DashBoardLayouts";
import Statistics from "../pages/Dashboard/Statistics";
import AddRoom from "../pages/Dashboard/AddRoom";
import MyListings from "../pages/Dashboard/MyListings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashBoardLayouts />,
    children: [
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: 'addRoom',
        element:<AddRoom/>
      },
      {
        path: 'myListings',
        element:<MyListings/>
      }
    ],
  },
]);
