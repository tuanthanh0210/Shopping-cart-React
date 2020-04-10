import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../../container/Home/Home';
import Food from '../../container/Food/Food';
import Drink from '../../container/Drink/Drink';
import Login from '../Login/Login';
import NavbarHeader from './NavbarHeader';
import StreetFood from '../../container/StreetFood/StreetFood';
import { CartProvider } from '../../container/Cart/Cart';

function Header (props) {
  return (
    <div>
      {/* <h2>Header</h2> */}
      <Router>
        <NavbarHeader />
        <Route path="/" exact component={Home} />
        <Route path="/Food/" exact component={Food} />
        <Route path="/drink/" exact component={Drink} />
        <Route path="/streetfood/" exact component={StreetFood} />
        <Route path="/Cart/" exact component={CartProvider} />
        <Route path="/login/" exact component={Login} />
      </Router>
    </div>
  );
}

export default Header;
