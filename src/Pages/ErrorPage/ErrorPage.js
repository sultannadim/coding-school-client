import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-light fw-bold">404</h1>
            <h1 className="text-light fw-bold">Page Not Found</h1>
            <Link className="btn btn-primary" to="/">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
