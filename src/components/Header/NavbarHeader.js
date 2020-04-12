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
import {CartContext} from '../../container/Cart/Cart'
import Search from '../Search/Search';

function NavbarHeader (props) {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => setIsOpen (!isOpen);
  return (
    <div>
      {/* <h3>Navbar</h3> */}
      <Navbar className='NavBar' color="light" light expand="lg">
        <NavbarBrand href="/">
          <img
            src="https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d"
            alt=""
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Search className='Search' />
          <Nav className="Nav ml-auto" navbar>
            <NavItem className='NavItem'>
              <Link className='Link' to="/">Trang chủ</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/food/">Đồ ăn</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/drink/">Đồ uống</Link>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/streetfood/">Ăn vặt</Link>
            </NavItem>
            <NavItem className='NavItem'>
            <CartContext.Consumer>
                {({ cartItems }) => (
                  <Link className='Link' to="/carts/">Giỏ hàng ({cartItems.length})</Link>
                )}
              </CartContext.Consumer>
            </NavItem>
            <NavItem className='NavItem'>
              <Link className='Link' to="/login/">Đăng nhập</Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
