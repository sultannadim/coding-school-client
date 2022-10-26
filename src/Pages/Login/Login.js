import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogin, googleLogin, githubLogIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handelGithubLogIn = () => {
    githubLogIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handelGoogleLgoin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <section className="py-5 checkout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <h1 className="fw-bold text-light mb-4">Login</h1>
            <Form
              onSubmit={handelSubmit}
              className="bg-light text-start p-sm-5 p-4 rounded-4"
            >
              <Form.Text className="text-danger fw-bold ">
                {error && error}
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="login-btn fw-bold w-100 my-3"
                type="submit"
              >
                Login
              </Button>
              <Button
                onClick={handelGoogleLgoin}
                variant="primary"
                className="login-btn w-100  fw-bold mb-2"
              >
                <FaGoogle className="me-2"></FaGoogle>
                Login With Google
              </Button>
              <Button
                onClick={handelGithubLogIn}
                variant="primary"
                className="login-btn w-100 fw-bold mb-2"
              >
                <FaGithub className="me-2"></FaGithub>
                Login With Github
              </Button>
              <p className="text-center m-0">
                <b>
                  Do not have an account? Please
                  <Link to="/register"> Registration</Link>
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
