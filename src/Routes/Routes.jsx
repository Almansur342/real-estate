import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Details from './../Pages/Details/Details';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from './../Firebase/PrivateRoute/PrivateRoute';
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Contact from './../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/data.json')
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=> fetch('/data.json')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/updateProfile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/contactUs',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ]
  },
]);

export default router;