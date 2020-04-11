import React, {Component} from 'react';
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Product from '../../components/Product/Product';

class StreetFood extends Component {
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
        "https://csuj4.sse.codesandbox.io/streetfoods"
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
      <div className="StreetFoods">
        <Product title='Ăn vặt vỉa hè' products={products}/>
      </div>
    );
  }
}

export default StreetFood;
