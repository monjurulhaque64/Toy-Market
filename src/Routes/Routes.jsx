import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AddToy from "../Pages/AddAToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToy from "../Pages/AllToy/AllToy";
import Details from "../Pages/Details/Details";
import MyToy from "../Pages/MyToy/MyToy";
import Update from "../Pages/Update/Update";
import Blogs from "../Pages/Blogs/Blogs";

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
          element: <AllToy></AllToy>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: 'mytoy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path:'/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    },
  ]);

  export default router;