import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import {CartContext} from '../Cart/Cart';
import './MyCart.css';

class MyCart extends Component {
  render () {
    return (
      <div className="MyCart">
        <h1>Giỏ hàng</h1>

        <Table hover responsive style={{align: `center`}}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <CartContext.Consumer>
              {({cartItems}) => {
                const carts = [
                  ...new Set (cartItems.map (item => item.id)),
                ].map (item => {
                  return {
                    product: cartItems.find (x => x.id === item),
                    count: cartItems.filter (x => x.id === item).length,
                    totalItem: cartItems
                      .filter (x => x.id === item)
                      .reduce ((total, item) => {
                        return total + item.price;
                      }, 0),
                  };
                });

                // console.log (carts);
                // const totalCart = carts.reduce ((total, item) => {
                //   return total + item.product.price * item.count;
                // }, 0);

                return carts.map ((cart, index) => (
                  <tr key={cart.product.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={cart.product.image}
                        width={150}
                        height={150}
                        alt=""
                      />
                    </td>
                    <td>{cart.product.name}</td>
                    <td>{cart.product.price.toLocaleString ()}</td>
                    <td>{cart.count}</td>
                    <td>{cart.totalItem.toLocaleString ()}</td>
                    <td>
                      <CartContext.Consumer>
                        {({removeItemCart}) => (
                          <Button
                            color="danger"
                            onClick={() => removeItemCart (cart.product.id)}
                          >
                            Xóa{' '}
                          </Button>
                        )}
                      </CartContext.Consumer>
                    </td>
                  </tr>
                ));
              }}
            </CartContext.Consumer>
          </tbody>
        </Table>
        <CartContext.Consumer>
          {({cartItems}) =>
            cartItems.length > 0 &&
            <div className="TotalCart">
              <div className="total-price">
                <h3>Tổng :</h3>
                <h3 className="total ml-4">
                  {cartItems
                    .reduce ((total, item) => {
                      return total + item.price;
                    }, 0)
                    .toLocaleString ()}
                </h3>
              </div>
              <div className="Btn-Pay-Del">
                <CartContext.Consumer>
                  {({onPurchase}) => (
                    <Button
                      style={{margin: `0 8px`}}
                      color="primary"
                      onClick={() => onPurchase ()}
                    >
                      Thanh toán{' '}
                    </Button>
                  )}
                </CartContext.Consumer>
                <CartContext.Consumer>
                  {({onDeleteCart}) => (
                    <Button
                      style={{margin: `0 8px`}}
                      color="danger"
                      onClick={() => onDeleteCart ()}
                    >
                      Hủy đơn hàng{' '}
                    </Button>
                  )}
                </CartContext.Consumer>
              </div>

            </div>}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default MyCart;
