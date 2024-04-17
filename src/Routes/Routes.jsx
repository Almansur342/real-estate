import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Details from './../Pages/Details/Details';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from './../Firebase/PrivateRoute/PrivateRoute';
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Contact from './../Pages/Contact/Contact';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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