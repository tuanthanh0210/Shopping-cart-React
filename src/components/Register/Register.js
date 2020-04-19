import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './Register.css';

class Register extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.onChange = this.onChange.bind (this);
    this.onSubmitForm = this.onSubmitForm.bind (this);
  }

  onChange (e) {
    // console.log (e.target.name, e.target.value);
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitForm (e) {
    e.preventDefault ();
    const {username, password, email} = this.state;
    const users = [
      {
        username: username,
        password: password,
        email: email,
      },
    ];
    if(username === '' || password === '' || email === ''){
      console.log(username)
      alert('Nhập thông tin')
    } else {
      localStorage.setItem ('users', JSON.stringify (users));
      alert ('Bạn đã đăng ký thành công !');
    }
  }

  render () {
    return (
      <div className="Register">
        <Form className="Form">
          <h3 className="Sign-in">Register</h3>
          <img
            src="https://www.now.vn/app/assets/img/Logo-Nowvn-Elip.png?e398e9326ddac9d81cae2dfce3c1d96c"
            alt=""
          />
          <FormGroup className="FormGroup">
            <Input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup className="FormGroup">
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup className="FormGroup">
            <Input
              type="email"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>

          {/* <Link className="Link-Register"> */}
          <Button
            type="submit"
            className="Button-Register"
            onClick={this.onSubmitForm}
          >
            Register
          </Button>
          {/* </Link> */}
          <Link to="/">
            <Button type="submit" className="Button-Register">
              Back to Login
            </Button>
          </Link>

        </Form>
      </div>
    );
  }
}

export default Register;
