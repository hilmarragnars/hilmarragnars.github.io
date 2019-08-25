import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import Education from './components/Education.js'
import Experience from './components/Experience.js'
// import Footer from './components/Footer.js'
import profilePic from '../assets/hilmar-profile-pic.jpeg';
import pdf from '../assets/myCv.pdf';


const HeaderWrapper = styled.div`
  text-align: center;
`

const HeaderTitle = styled.div`
  font-size: 45px;
  margin: 40px 0;
`
const IntroWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 8px 8px 8px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
  }
`
const IntroPicWrapper = styled.div`
  height: 300px;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-bottom: 16px;
    text-align: center;
    background-color: #F5E1C8;
  }
`
const IntroPic = styled.img`
  height: 100%;
`
const IntroTextWrapper = styled.div`
  padding-left: 8px;
`
const IntroText = styled.div`
`
const CvWrapper = styled.div`
  border-right: 1px solid #000;
  padding: 8px;
  text-align: center;
`
const CvLink = styled.a`
  cursor: pointer;
  color: gray;
  font-size: 32px;
  text-decoration: none;
`


class MainPage extends Component {
  render() {
    return (
      <Container>
        <HeaderWrapper>
          <HeaderTitle>Hilmar Ragnarsson</HeaderTitle>
        </HeaderWrapper>
        <IntroWrapper>
          <IntroPicWrapper>
            <IntroPic src={profilePic} alt="me" />
          </IntroPicWrapper>
          <IntroTextWrapper>
            <IntroText>I am the best programmer in my moms world. And I am also the best programmer in my grandmothers world. I don't think my dog knows I am a programmer but if she knew I would also be the best programmer in her world.</IntroText>
          </IntroTextWrapper>
        </IntroWrapper>
        <Experience />
        <Education />
        <CvWrapper>
          <CvLink href={pdf} target="_blank">Curriculum Vitae</CvLink>
        </CvWrapper>
        {/* <Footer /> */}
      </Container>
    );
  }
}


export default MainPage;
