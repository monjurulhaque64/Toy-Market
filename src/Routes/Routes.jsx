import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AddToy from "../Pages/AddAToy/AddToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/singup',
          element: <SingUp></SingUp>
        },
        
        {
          path: '/addtoy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/alltoy',
          element: <AddToy></AddToy>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    },
  ]);

  export default router;