import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { CartContext } from "../Cart/Cart";

class SelectedProduct extends Component {
  render() {
    return (
      <div className="SelectedProduct">
        <Container>
          <h2>My cart</h2>
          <Row>
            <CartContext.Consumer>
              {({ cartItems }) => {
                const carts = [...new Set(cartItems.map(item => item.id))].map(
                  item => {
                    return {
                      product: cartItems.find(x => x.id === item),
                      count: cartItems.filter(x => x.id === item).length
                    };
                  }
                );

                // console.log(cartItems);
                return carts.map(cart => (
                  <Col sm="4" key={cart.product.id}>
                    <Card>
                      <CardImg top width="100%" src={cart.product.image} />
                      <CardBody>
                        <CardTitle>{cart.product.name}</CardTitle>
                        {/* <CardText>{cart.product.description}</CardText> */}
                        <CartContext.Consumer>
                          {({ removeItemCart }) => (
                            <Button
                              onClick={() => removeItemCart(cart.product.id)}
                            >
                              Remove{" "}
                            </Button>
                          )}
                        </CartContext.Consumer>
                        <Button color="primary">{cart.count}</Button>
                      </CardBody>
                    </Card>
                  </Col>
                ));
              }}
            </CartContext.Consumer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SelectedProduct;
