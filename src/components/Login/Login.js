import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Form className="Form">
          <h3 className='Sign-in'>Sign in</h3>
          <img
            src="https://www.now.vn/app/assets/img/Logo-Nowvn-Elip.png?e398e9326ddac9d81cae2dfce3c1d96c"
            alt=""
          />
          <FormGroup className="FormGroup">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup className="FormGroup">
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <Label check className="typeCheckBox">
            <Input type="checkbox" /> Remember me
          </Label>

          <Button className="Button">Sign in</Button>
          <div className="FooterLogin">
            <Label>Register</Label>
            <Label>Forgot password ?</Label>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
