import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Admission from "../Pages/Admission/Admission";
import InfoPage from "../Pages/Admission/InfoPge";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        },
        {
            path: '/admission',
            element:<Admission></Admission>
        },
        {
            path: '/infoPage',
            element: <InfoPage></InfoPage>
        }
      ]
    },
  ]);