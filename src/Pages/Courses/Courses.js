import React from "react";
import AllCourse from "../../components/AllCourse/AllCourse";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import "./Courses.css";

const Courses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <section className="py-5 all-courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-5 mb-md-0 mb-4">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col-lg-9 col-md-7">
            <div className="row">
              {allCourses.map((allCourse) => (
                <AllCourse key={allCourse.id} allCourse={allCourse}></AllCourse>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
