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
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import StudentManagement from "../Pages/Dashboard/MangeStudents/StudentManagement";

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
            element:<PrivetRoute><Admission></Admission></PrivetRoute>
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
    {
      path: "/dashboard",
      element:  <Dashboard></Dashboard>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
            path: 'adminHome',
            element:<AdminHome></AdminHome>
        },
        {
            path: 'studentManage',
            element:<StudentManagement></StudentManagement>
        },
        
      ]
    },
  ]);