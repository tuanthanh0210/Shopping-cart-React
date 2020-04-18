import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    
    if(token !== null){
      this.state = {
        isLogin : true,
        cartItems: [],
      };
    } else{
      this.state = {
        isLogin : false,
        cartItems: [],
      };
    }
    

    this.addToCart = this.addToCart.bind(this);
    this.removeItemCart = this.removeItemCart.bind(this);
    this.onPurchase = this.onPurchase.bind(this);
    this.onDeleteCart = this.onDeleteCart.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  addToCart(product) {
    // console.log(product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  removeItemCart(id) {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== id)
    });
  }

  onPurchase(){
    alert('You purchased. Thanks you very much')
    this.setState({
      cartItems: []
    })
  }
  
  onDeleteCart(){
    alert('You deleted cart. Hmmmm.')
    this.setState({
      cartItems: []
    })
  }

  onLogout () {
    localStorage.removeItem ('token');
    this.setState({
      isLogin: false
    })
  }

  onLogin(){
    this.setState({
      isLogin: true
    })
  }
  

  render() {
    // if(this.state.isLogin === false){
    //   return <Redirect to="/login/" />
    // }
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          isLogin: this.state.isLogin,
          onLogout: this.onLogout,
          onLogin: this.onLogin,
          addToCart: this.addToCart,
          removeItemCart: this.removeItemCart,
          onPurchase: this.onPurchase,
          onDeleteCart : this.onDeleteCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

