import React from 'react';
import styled from 'styled-components';
import pdf from '../../assets/myCv.pdf';

const CvWrapper = styled.div`
  border-right: 1px solid #DCDCDC;
  padding: 32px;
  text-align: center;
`
const CvText = styled.h3`
  font-weight: normal;
  margin: ${props => props.marginTop} 0;
`
const CvLink = styled.a`
  cursor: pointer;
  color: gray;
  font-size: 32px;
  text-decoration: none;
`

const CvFile = function(props) {
  return (
    <CvWrapper>
      <CvText>Here is a link to a pdf version of my CV</CvText>
      <CvLink href={pdf} target="_blank">Curriculum Vitae</CvLink>
    </CvWrapper>
  );
};

export default CvFile;
