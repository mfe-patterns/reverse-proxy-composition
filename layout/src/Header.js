import React, { useEffect, useState } from 'react';

import { Heading4 } from 'ui-components';
import * as S from './Header.styles';

export default () => {
  return (
    <S.Header>
      <div className='container'>
        <S.Content>
          <a href="http://localhost:3000/products/">
            <Heading4>CBP Marketplace</Heading4>
          </a>
          <S.CartLink href="http://localhost:3000/cart/">
            Cart            
          </S.CartLink>
        </S.Content>
      </div>
    </S.Header>
  )
}