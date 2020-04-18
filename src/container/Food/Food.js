import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer'

export default function Food () {
  const [loading, setLoading] = useState (true);
  const [products, setProducts] = useState ([]);

  useEffect (() => {
    let mounted = false;
    async function fetchData () {
      try {
        const productAPI = await axios.get (
          'https://csuj4.sse.codesandbox.io/foods'
        );
        if (!mounted) {
          setProducts (productAPI.data);
        }
      } catch (err) {
        console.log (err);
      } finally {
        if (!mounted) {
          setLoading (false);
        }
      }
    }
    fetchData ();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="Products">
      <Product title="Đồ ăn văn phòng" products={products} />
      <Footer />
    </div>
  );
}
