import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./AllCourse.css";

const AllCourse = ({ allCourse }) => {
  const { title, img, details, price } = allCourse;
  return (
    <div className="col-lg-6 mb-4">
      <Link>
        <Card className="w-100 course-card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-dark">{title}</Card.Title>
            <Card.Text className="text-dark">
              {details.length > 120 ? details.slice(0, 120) + "..." : details}
            </Card.Text>
            <p className="mb-0 mt-3 text-dark text-end">
              <b>Price : ${price}</b>
            </p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default AllCourse;
