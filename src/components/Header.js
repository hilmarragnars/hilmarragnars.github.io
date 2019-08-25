import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
`
const HeaderTitle = styled.div`
  font-size: 45px;
  margin: 40px 0;
`

const Header = function(props) {
  return (
    <HeaderWrapper>
      <HeaderTitle>Hilmar Ragnarsson</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
