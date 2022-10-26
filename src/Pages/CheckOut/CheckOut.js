import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./CheckOut.css";

import Card from "react-bootstrap/Card";

const CheckOut = () => {
  const checkOutCourse = useLoaderData();
  const { title, category, id, price } = checkOutCourse;
  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h1 className="text-light fw-bold mb-5">
              Your Course Name <span className="text-danger">{category}</span>
            </h1>
            <Card>
              <Card.Header className="fw-bold text-dark">Check Out</Card.Header>
              <Card.Body>
                <Card.Text className="text-start">
                  <p className=" mb-1">
                    <b>
                      <span className="text-info">Course Id :</span>{" "}
                      <span className="text-success">{id}</span>
                    </b>
                  </p>
                  <p className=" mb-1">
                    <b>
                      <span className="text-info">Course Title :</span>{" "}
                      <span className="text-success">{title}</span>
                    </b>
                  </p>
                  <p>
                    <b>
                      <span className="text-info">Course Price :</span>
                      <span className="text-success"> ${price}</span>
                    </b>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">
                <Link className="btn btn-primary btn-order fw-bold" to="/">
                  Place Order
                </Link>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
