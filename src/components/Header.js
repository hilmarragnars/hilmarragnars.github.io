import React from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';

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
      <Container>
        <HeaderTitle>Hilmar Ragnarsson</HeaderTitle>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
