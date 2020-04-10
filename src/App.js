import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {CartProvider} from './container/Cart/Cart';

function App () {
  return (
    <CartProvider>
      <div className="App">
        <Header />
      </div>
    </CartProvider>
  );
}

export default App;
