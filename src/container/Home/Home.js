import React,{Component} from 'react';
import './Home.css'
import { Link, Redirect } from "react-router-dom";
// import PropTypes from 'prop-types';

// Home.propTypes = {
    
// };

export default class Home extends Component {
    constructor(props) {
      super(props);
      const token = localStorage.getItem("token");
      let loggedIn = true;
      if (token === null) {
        loggedIn = false;
      }
      this.state = {
        loggedIn
      };
    }

    onLogout(){
        localStorage.removeItem("token");
    }
    render() {
      if (this.state.loggedIn === false) {
        return <Redirect to="/login/" />;
      }
      return (
        <div className="Home">
          <h1>Home Page</h1>
          <button onClick={() => this.onLogout()}>
            <Link to="/login/">Logout</Link>
          </button>
        </div>
      );
    }
  }
