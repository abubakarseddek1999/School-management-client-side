import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Admission from "../Pages/Admission/Admission";
import PreviewPage from "../Pages/Admission/PreviewPage";
import Classes from "../Pages/Classes/Classes";
import NotFound from "../Pages/ErrorPage/NotFound";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
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
            path: '/PreviewPage',
            element: <PreviewPage></PreviewPage>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/SignUP',
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);