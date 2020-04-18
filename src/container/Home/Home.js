import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import Loading from '../../components/Loading/Loading';
import { CartContext } from '../../container/Cart/Cart';
import './Home.css';

export default class Home extends Component {
  constructor (props) {
    super (props);
    this.isComponentMounted = false;
    const token = localStorage.getItem ('token');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loading: true,
      products: [],
      loggedIn,
    };
  }

  async componentDidMount () {
    this.isComponentMounted = true;
    try {
      const productsAPI = await axios.get (
        'https://csuj4.sse.codesandbox.io/homelist'
      );
      if (this.isComponentMounted) {
        this.setState ({
          products: productsAPI.data,
        });
      }
    } catch (err) {
      console.log (err);
    } finally {
      if (this.isComponentMounted) {
        this.setState ({loading: false});
      }
    }
  }

  componentWillUnmount () {
    this.isComponentMounted = false;
  }

  onLogout () {
    localStorage.removeItem ('token');
  }
  render () {
    const {products, loading} = this.state;
    if (this.state.loggedIn === false) {
      return <Redirect to="/login/" />;
    }
    if (loading) return <Loading />;
    return (
      <div className="Home">
        
        <div className="Main">
          <div className="Main-Left">
            <p>Đặt đồ ăn, giao hàng từ 20' ...</p>
            <p>Có 17925 địa điểm ở Hà Nội </p>
            <div className="search-home">
              <input
                type="text"
                placeholder="Tìm địa điểm , món ăn, địa chỉ..."
              />
              <img
                src="https://image.flaticon.com/icons/svg/482/482631.svg"
                width={32}
                height={32}
                alt=""
              />
            </div>
            <div className="list-item">
              <span>Đồ ăn</span>
              <span>Đồ uống</span>

              <span>Đồ chay</span>
              <span>Bánh kem</span>
              <span>Tráng miệng</span>

              <span>Homemade</span>
              <span>Vìa hè</span>
              <span>Pizza/Burger</span>

              <span>Món gà</span>
              <span>Món lẩu</span>
              <span>Sushi</span>

              <span>Mì phở</span>
              <span>Cơm hộp</span>
            </div>
            <h5>Sử dụng App Now để có nhiều giảm giá và trải nghiệm tốt hơn</h5>
            <div className="app-mobile-now">
              <img
                width={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/448px-Available_on_the_App_Store_%28black%29.png"
                alt=""
              />
              <img
                width={150}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkBZsfbLzj4cGZDZHb7E9xWjObfeyddZms_ddm4I36OzLqoED5&usqp=CAU"
                alt=""
              />
            </div>
            {/* <Product /> */}
          </div>
          <div className="Main-Right">
            <p className="title"><a href="#">Chọn địa chỉ giao hàng</a></p>
            <div className="list-product">
              <Container>
                <Row>
                  {products.map (product => (
                    <Col sm="6" md="4" key={product.id}>
                      <Card className="Card">
                        <CardImg
                          className="CardImg"
                          top
                          width="100%"
                          src={product.image}
                        />
                        <CardBody className="CardBody">
                          <CardTitle className="CardTitle">
                            {product.name}
                          </CardTitle>
                          <div className="Card-Cart-Price">
                            <CardText className="CardText">
                              {' '}{product.price.toLocaleString ()} VNĐ
                            </CardText>
                            <CartContext.Consumer>
                              {({addToCart}) => (
                                <Button
                                  color="success"
                                  onClick={() => addToCart (product)}
                                >
                                  Thêm
                                  {' '}
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
            <a href="#">Xem thêm</a>
          </div>
        </div>
      </div>
    );
  }
}
