import React, { Component } from 'react';
import styled from 'styled-components';
import pdf from '../assets/myCv.pdf';

const CvWrapper = styled.div`
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  padding: 8px;
  text-align: center;
`
const CvLink = styled.a`
  cursor: pointer;
  color: gray;
  font-size: 32px;
  text-decoration: none;
`

class Cv extends Component {
  render() {
    return (
      <CvWrapper>
        <CvLink href={pdf} target="_blank">Curriculum Vitae</CvLink>
      </CvWrapper>
    );
  }
}

export default Cv;
