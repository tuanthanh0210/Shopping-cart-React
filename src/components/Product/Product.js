import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { CartContext } from '../../container/Cart/Cart';
import './Product.css';
// import PropTypes from 'prop-types';

// Product.propTypes = {

// };

function Product (props) {
  return (
    <div className="Products">
      <Container>
        <h2>{props.title}</h2>
        <Row>
          {props.products.map (product => (
            <Col sm="6" md='4' lg='3' key={product.id} >
              <Card className="Card">
                <CardImg
                  className="CardImg"
                  top
                  width="100%"
                  src={product.image}
                />
                <CardBody className="CardBody">
                  <CardTitle className="CardTitle">{product.name}</CardTitle>
                  <div className="Card-Cart-Price">
                    <CardText className="CardText"> {product.price.toLocaleString()} VNĐ</CardText>
                    <CartContext.Consumer>
                      {({isLogin, addToCart}) => (
                        isLogin && <Button
                          color="success"
                          onClick={() => addToCart (product)}
                        >
                          Thêm
                          {' '}
                          {/* <img
                            width={32}
                            height={32}
                            src="https://image.flaticon.com/icons/svg/1374/1374077.svg"
                            alt=""
                          /> */}
                          {' '}
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Product;
