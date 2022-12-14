import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import CheckOut from "../Pages/CheckOut/CheckOut";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/",
        loader: () => fetch("https://y-three-azure.vercel.app/categories"),
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: () => fetch("https://y-three-azure.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "course/details/:id",
        loader: ({ params }) =>
          fetch(`https://y-three-azure.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "checkout/course/:id",

        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://y-three-azure.vercel.app/course/${params.id}`),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
