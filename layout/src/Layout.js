import React from 'react';

import Header from './Header';
import Footer from './Footer';
import * as S from './Layout.styles';

window.createMfeContainerInLayout = (elementId) => {
  const mainContent = document.createElement('div');
  mainContent.id = elementId;
  document.getElementById('main-root').appendChild(mainContent);
}

export default () => {
  return (
    <S.Layout>
      <Header />
      <S.Main id="main-root" />
      <Footer />
    </S.Layout>
  )
}