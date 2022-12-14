import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./CourseDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const { title, details, img, category, price, id } = singleCourse;
  return (
    <section className="course-details py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="details-heading">
              <h1 className="fw-bold text-light mb-5">
                All Details About
                <span className="text-danger"> {category}</span> Course.
              </h1>

              <Card ref={ref}>
                <Card.Header className="text-end">
                  <Pdf targetRef={ref} filename={category}>
                    {({ toPdf }) => (
                      <FaFilePdf
                        onClick={toPdf}
                        className="pdf-file"
                      ></FaFilePdf>
                    )}
                  </Pdf>
                </Card.Header>
                <Card.Body className="text-start">
                  <Image src={img} alt="loog" className="detail-img"></Image>
                  <Card.Title className="mb-3">{title}</Card.Title>
                  <Card.Text className=" mb-3">{details}</Card.Text>
                  <Button variant="primary" className="premium-btn">
                    <Link to={`/checkout/course/${id}`} className="text-light">
                      Get premium access
                    </Link>
                  </Button>
                </Card.Body>
                <Card.Footer className="text-dark">
                  <p className="text-end m-0">
                    <b>Price : ${price}</b>
                  </p>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
