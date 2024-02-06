import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Form className="container col-lg-3 forms">
        <Form.Group className="text-center loginPage">
          <Form.Label>Login</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Link to="/adminBody/lid">
          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
