import React from "react";
import AllCourse from "../../components/AllCourse/AllCourse";

import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="py-5 all-courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <AllCourse></AllCourse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
