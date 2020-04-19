import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import './Login.css';
import {Link, Redirect} from 'react-router-dom';
import {CartContext} from '../../container/Cart/Cart';

class Login extends Component {
  constructor (props) {
    super (props);
    const token = localStorage.getItem ('token');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      username: '',
      password: '',
      loggedIn,
    };

    this.onChange = this.onChange.bind (this);
    this.onSubmitForm = this.onSubmitForm.bind (this);
  }

  onChange (e) {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitForm (onLogin) {
    // e.preventDefault ();
    const {username, password} = this.state;
    const users = JSON.parse(localStorage.getItem('users'))
    users.map( item => {
      if (username === item.username && password === item.password) {
        localStorage.setItem ('token', 'sadnqwiojdosadm');
        this.setState ({
          loggedIn: true,
        });
        onLogin()
      } else {
        alert ('Bạn đã nhập sai tài khoản...');
      }
    })
  }

  render () {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Login">
        <CartContext.Consumer>
          {({onLogin}) => (
            <Form className="Form" >
              <h3 className="Sign-in">Sign in</h3>
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
              <Label check className="typeCheckBox">
                <Input type="checkbox" /> Remember me
              </Label>
              <Button
                type="submit"
                className="Button"
                onClick={() => this.onSubmitForm(onLogin)}
              >
                Sign in
              </Button>
              <div className="FooterLogin">
                <Label>
                  <Link
                    style={{color: `white`, fontSize: `1rem`}}
                    to="/register/"
                  >
                    Register
                  </Link>
                </Label>
                <Label>
                  <Link style={{color: `white`, fontSize: `1rem`}} to="#">
                    Forgot password ?
                  </Link>
                </Label>
              </div>
            </Form>
          )}
        </CartContext.Consumer>

      </div>
    );
  }
}

export default Login;
