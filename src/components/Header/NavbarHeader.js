import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import {CartContext} from '../../container/Cart/Cart';
import Search from '../Search/Search';
import './NavbarHeader.css';

function NavbarHeader (props) {
  const [isOpen, setIsOpen] = useState (false);
  const toggle = () => setIsOpen (!isOpen);

  return (
    <div>
      {/* <h3>Navbar</h3> */}
      <Navbar className="NavBar" color="light" light expand="lg">
        <NavbarBrand href="/">
          <img
            src="https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d"
            alt=""
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Search className="Search" />
          <Nav className="Nav ml-auto" navbar>
            <NavItem className="NavItem">
              <Link className="Link" to="/">Trang chủ</Link>
            </NavItem>
            <NavItem className="NavItem">
              <Link className="Link" to="/food/">Đồ ăn</Link>
            </NavItem>
            <NavItem className="NavItem">
              <Link className="Link" to="/drink/">Đồ uống</Link>
            </NavItem>
            <NavItem className="NavItem">
              <Link className="Link" to="/streetfood/">Ăn vặt</Link>
            </NavItem>
            <CartContext.Consumer>
              {({cartItems}) =>
                cartItems.length > 0 &&
                <NavItem className="NavItem">
                  <Link className="Link" to="/carts/">
                    Giỏ hàng ({cartItems.length})
                  </Link>
                </NavItem>}
            </CartContext.Consumer>
            <CartContext.Consumer>
              {({isLogin, onLogout}) =>
                isLogin &&
                <NavItem className="NavItem">
                  <Link className="Link" to="/login/" onClick={onLogout}>
                    Đăng xuất
                  </Link>
                </NavItem>}
            </CartContext.Consumer>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
