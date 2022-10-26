import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const { title, details, img, category } = singleCourse;
  return (
    <section className="course-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="details-heading">
              <h1 className="fw-bold text-light">
                All Details About
                <span className="text-danger"> {category}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
