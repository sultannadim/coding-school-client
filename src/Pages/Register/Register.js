import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, emailVarify } =
    useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
          .then(() => {
            emailVarify().then(() => {});
            toast.error("Please varify your email");
          })
          .catch((error) => console.error(error));
        const user = result.user;

        console.log(user);
        setError("");

        form.reset();
        navigate("/");
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
            <h1 className="fw-bold text-light mb-4">Registration</h1>
            <Form
              onSubmit={handelSubmit}
              className="bg-light text-start p-sm-5 p-4 rounded-4"
            >
              <Form.Text className="text-danger fw-bold ">
                {error && error}
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">User Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="User Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Photo URL</Form.Label>
                <Form.Control
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                />
              </Form.Group>

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
