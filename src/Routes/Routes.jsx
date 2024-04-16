import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Details from './../Pages/Details/Details';

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
        element:<Details></Details>,
        loader:()=> fetch('/data.json')
      }
    ]
  },
]);

export default router;