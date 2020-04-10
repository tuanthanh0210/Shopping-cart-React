import React, {Component} from 'react';
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
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { CartContext } from "../Cart/Cart";
import Footer from '../../components/Footer/Footer';

class Food extends Component {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.state = {
      loading: true,
      products: []
    };
  }

  async componentDidMount() {
    this.isComponentMounted = true;
    try {
      const productsAPI = await axios.get(
        "https://csuj4.sse.codesandbox.io/foods"
      );
      if (this.isComponentMounted) {
        this.setState({
          products: productsAPI.data
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) {
        this.setState({ loading: false });
      }
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    const { products, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="Products">
        <Container>
          <h2>Đồ ăn văn phòng</h2>
          <Row>
            {products.map(product => (
              <Col sm="4" key={product.id}>
                <Card>
                  <CardImg top width="100%" src={product.image} />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.price}</CardText>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button color='success' onClick={() => addToCart(product)}>
                          Add{" "}
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Food;
