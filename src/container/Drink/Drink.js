import React, {Component} from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer'


class Drink extends Component {
  constructor (props) {
    super (props);
    this.isComponentMounted = false;
    this.state = {
      loading: true,
      products: [],
    };
  }

  async componentDidMount () {
    this.isComponentMounted = true;
    try {
      const productsAPI = await axios.get (
        'https://csuj4.sse.codesandbox.io/drinks'
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

  render () {
    const {products, loading} = this.state;
    // const {products}
    if (loading) return <Loading />;
    return (
      <div className="Products">
        <Product title="Đồ uống" products={products} />
        <Footer />
      </div>
    );
  }
}

export default Drink;
