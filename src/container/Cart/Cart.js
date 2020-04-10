import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeItemCart = this.removeItemCart.bind(this);
  }

  addToCart(product) {
    // console.log(product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  removeItemCart(id) {
    // console.log("remove" + id);
    // const newCart = [...this.state.cartItems];
    // let index = this.state.cartItems.indexOf(product);
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== id)
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          removeItemCart: this.removeItemCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

