export * from './ProductList';

import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './ProductList';

if(window.createMfeContainerInLayout) {
  window.createMfeContainerInLayout('catalog-root');
}

ReactDOM.render(
  <StylesProvider>
    <ProductList />
  </StylesProvider>,
  document.querySelector('#catalog-root')
);
