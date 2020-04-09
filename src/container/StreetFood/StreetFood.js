import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Product from '../../components/layout/Product/Product';
// import PropTypes from 'prop-types';

// StreetFood.propTypes = {
    
// };

function StreetFood(props) {
    return (
        <div>
            <h2>StreetFood</h2>
            <Product />
            <Footer />
        </div>
    );
}

export default StreetFood;