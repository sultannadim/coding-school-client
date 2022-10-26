import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Regestration from "../Pages/Regestration/Regestration";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: () => fetch("http://localhost:5000/courses"),
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
        path: "registration",
        element: <Regestration></Regestration>,
      },
      {
        path: "course/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "checkout/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CheckOut></CheckOut>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
