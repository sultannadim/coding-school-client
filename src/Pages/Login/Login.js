import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="fw-bold text-light mb-4">Login</h1>
            <Form className="bg-light text-start p-5 rounded-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
                Login
              </Button>
              <Button
                variant="primary"
                className="login-btn w-100  fw-bold mb-2"
              >
                <FaGoogle className="me-2"></FaGoogle>
                Login With Google
              </Button>
              <Button
                variant="primary"
                className="login-btn w-100 fw-bold mb-2"
              >
                <FaGithub className="me-2"></FaGithub>
                Login With Github
              </Button>
              <p className="text-center">
                <b>
                  Do not have an account? Please{" "}
                  <Link to="/register">Register</Link>
                </b>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
