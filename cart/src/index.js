export * from './ProductList';

import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './ProductList';

if(window.createMfeContainerInLayout) {
  window.createMfeContainerInLayout('cart-root');
}

ReactDOM.render(
  <StylesProvider>
    <ProductList />
  </StylesProvider>,
  document.querySelector('#cart-root')
);
