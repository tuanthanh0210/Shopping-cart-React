import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavbarHeader.css';

function NavbarHeader (props) {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => setIsOpen (!isOpen);
  return (
    <div>
      {/* <h3>Navbar</h3> */}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src="https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d"
            alt=""
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="Nav ml-auto" navbar>
            <NavItem className='NavItem'>
              <Link className='Link' to="/home/">Home</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/food/">Food</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/drink/">Drink</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/streetfood/">Streetfood</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/carts/">Cart</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/login/">Login</Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
