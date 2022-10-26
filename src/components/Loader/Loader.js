import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="checkout d-flex align-items-center justify-content-center">
      <div className="spinner-box ">
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};

export default Loader;
