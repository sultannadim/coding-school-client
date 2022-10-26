import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <h1 className="fw-bold text-light mb-4">Registration</h1>
            <Form className="bg-light text-start p-sm-5 p-4 rounded-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
                <Form.Text className="text-danger fw-bold ">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Photo URL" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant="primary"
                className="login-btn fw-bold w-100 my-3"
                type="submit"
              >
                Registration
              </Button>

              <p className="text-center m-0">
                <b>
                  Already have an account? Please <Link to="/login">Login</Link>
                </b>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
