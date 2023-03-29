import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';

import Layout from './Layout';
import { GlobalFonts, GlobalStyles } from './GlobalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyles />
    <Layout />
  </ThemeProvider>,
  document.querySelector('#layout-dev-root')
);
